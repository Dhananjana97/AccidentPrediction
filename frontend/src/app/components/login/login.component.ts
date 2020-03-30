import { Component, OnInit, NgZone } from '@angular/core';
import { LogService } from 'src/app/services/logService/log.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public log: LogService, public auth: AngularFireAuth, public router: Router, public ngZone: NgZone) { }

  ngOnInit(): void {
  }

  verified = true;

  login(form_email, form_password) {
    firebase.auth().signInWithEmailAndPassword(form_email, form_password)
    .then(() => {
      this.log.logged = true;
      if (firebase.auth().currentUser.emailVerified) {
        this.log.logged = true;
        this.router.navigate(["home/dashboard"]);
      } else {
        this.verified = false;
        this.router.navigate(["login"]);
        window.alert("Please confirm your email!");
        firebase.auth().signOut()
      }

    }).catch((error) => {
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
