import { Component, OnInit, NgZone } from '@angular/core';
import { LogService } from 'src/app/services/logService/log.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { RestService } from 'src/app/services/rest/rest.service';
import { throwError } from 'rxjs';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public log: LogService, 
    public auth: AngularFireAuth, 
    public router: Router, 
    public ngZone: NgZone, 
    private rest: RestService,
    private snackBar:SnackbarService
    ) { }

  ngOnInit(): void {
  }
  public spinner = false;
  // verified = true;
  // throw new SyntaxError("Incomplete data: no name");

  login(form_email, form_password) {
    this.spinner = true;
    if (form_email=="" || form_password==""){
      this.spinner = false;
      this.snackBar.openSnackBar("Plaease fill all the fields!","error");
      return null;
    }
    firebase.auth().signInWithEmailAndPassword(form_email, form_password)
      .then(() => {
        var current_user;
        try {
          current_user = firebase.auth().currentUser;
        }
        catch (e) {
          window.alert(e);
          firebase.auth().signOut();
          this.spinner = false;
          this.snackBar.openSnackBar("Error in authentication!","error");
          return null;
        }
        if (!current_user.emailVerified) {
          current_user.sendEmailVerification().then(function () {
            firebase.auth().signOut();
            this.spinner = false;
            this.snackBar.openSnackBar("Try to login after the email verification.The verification email has been sent!","error");
            return null;
          }).catch(function (error) {
            firebase.auth().signOut();
            this.spinner = false;
            this.snackBar.openSnackBar("Error! The verification email cannot be sent!","error");
            return null;
          });
        }
        else{
          this.rest.requestUserDetails().subscribe(
            (user_details) => {
              if (user_details["status"] == 1) {
                this.log.setUserLogStatus(user_details);
                this.spinner = false;
                this.router.navigate(["home"]);
                return null;
              }
              firebase.auth().signOut();
              this.spinner = false;
              this.snackBar.openSnackBar("User is not accepted by system admins yet. Try again later.","error");
          },
          (error) => {
            firebase.auth().signOut();
            this.spinner = false;
            this.snackBar.openSnackBar("Error in authentication. Try again later.","error");
            this.router.navigate(["login"]);
          }
          );
        }
      })
      .catch((error) => {
        this.spinner = false;
        this.snackBar.openSnackBar("Invalid credentials. Try again.","error");
        this.router.navigate(["login"]);
      });
    }
    
    sendVerification(form_email, form_password) {
    firebase.auth().signInWithEmailAndPassword(form_email, form_password)
      .then(() => {
        firebase.auth().currentUser.sendEmailVerification().then(function () {
          this.snackBar.openSnackBar("Verify your email.The verification email has been sent!","error");
          firebase.auth().signOut();
        }).catch(function (error) {
          this.snackBar.openSnackBar("Error! The verification email cannot be sent!","error");
          firebase.auth().signOut();
        });
      })
      .catch((error)=>{
        this.snackBar.openSnackBar("The verification email cannot be sent! Please try again with real credentials","error");
      })
  }
}


