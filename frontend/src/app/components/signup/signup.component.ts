import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private rest: RestService) { }

  ngOnInit(): void {
  }
  ranks = ["Rank1", "Rank2", "Rank3", "Rank4"]

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
          rank :rank
        };
        this.rest.sendFirstUser(data).subscribe(
          () => {
            console.log("User is registered successfully!")
            this.router.navigate(["login"]);
          },
          (error) => {
            window.alert("User is registered, but request for the Accident Analysing System is not completed!");
            console.error("Something went wrong when user registering the backend!  " + error);
            this.router.navigate(["login"]);
          }
        );
      })
      .catch((error) => {
        window.alert(error.message);
      })
  }

}
