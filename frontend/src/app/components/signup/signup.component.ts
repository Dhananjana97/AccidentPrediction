import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest/rest.service';
import { Ranks } from './../../systemData/systenRoles';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router, 
    private rest: RestService,
    private snackBar:SnackbarService
    ) { }

  ngOnInit(): void {
  }
  
  private ranks = Ranks;

  getRanks(){
    return this.ranks;
  }

  signup(email, password, name, rank) {
    if (email == "" || password == "" || name == "" || rank == "") {
      window.alert("Fill all fields");
      return null;
    }
    let aut_promise = firebase.auth().createUserWithEmailAndPassword(email, password);
    aut_promise
      .then(() => {
        let data = {
          name: name,
          rank: rank
        };
        this.rest.sendFirstUser(data).subscribe(
          () => {
            console.log("User is registered successfully!");
            firebase.auth().currentUser.sendEmailVerification()
              .then(() => {
                firebase.auth().signOut();
                this.snackBar.openSnackBar("Dear " + data.name + "! Your request for the accident prediction systm will be accepted by administration soon! And try to verify your email!", "error");
                this.router.navigate(["login"]);
              })
              .catch(function (error) {
                this.snackBar.openSnackBar("Rgistered successfully! but The verification email cannot be sent! Try again!", "error");
                firebase.auth().currentUser.delete()
                this.router.navigate(["login"]);
              });
          },
          (error) => {
            this.snackBar.openSnackBar("Request for the Accident Analysing System is not completed! Register again!", "error");
            this.router.navigate(["login"]);
          }
        );
      })
      .catch((error) => {
        this.snackBar.openSnackBar("Something went wrog. Try again!", "error");
      })
  }

}
