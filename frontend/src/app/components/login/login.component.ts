import { Component, OnInit, NgZone } from '@angular/core';
import { LogService } from 'src/app/services/logService/log.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { RestService } from 'src/app/services/rest/rest.service';
import { throwError } from 'rxjs';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public log: LogService, public auth: AngularFireAuth, public router: Router, public ngZone: NgZone, private rest: RestService) { }

  ngOnInit(): void {
  }

  verified = true;
  // throw new SyntaxError("Incomplete data: no name");

  login(form_email, form_password) {
    firebase.auth().signInWithEmailAndPassword(form_email, form_password)
      .then(() => {
        var current_user;
        try {
          current_user = firebase.auth().currentUser;
        }
        catch (e) {
          window.alert(e);
          firebase.auth().signOut();
          return null;
        }
        if (!current_user.emailVerified) {
          this.verified = false;
          window.alert("Please confirm your email!");
          firebase.auth().signOut();
          return null;
        }
        this.rest.requestUserDetails().subscribe(
          (user_details) => {
            console.log(user_details);
            if (user_details["status"] == 1) {
              this.log.setUserLogStatus(user_details);
              this.router.navigate(["home/dashboard"]);
              return null;
            }
            firebase.auth().signOut();
            window.alert("User is not accepted by system admins yet. Try again later.");
          },
          (error) => {
            firebase.auth().signOut();
            window.alert(error);
            this.router.navigate(["login"]);
          }
        );
      })
      .catch((error) => {
        window.alert(error);
        this.router.navigate(["login"]);
      });
  }

  sendVerification(form_email, form_password) {
    firebase.auth().signInWithEmailAndPassword(form_email, form_password)
      .then(() => {
        firebase.auth().currentUser.sendEmailVerification().then(function () {
          window.alert("Verify your email.The verification email has been sent!")
        }).catch(function (error) {
          window.alert("The verification email cannot be sent! Please try again with real credentials")
        });
      })
    firebase.auth().signOut()
  }
}
