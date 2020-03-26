import { Component, OnInit } from '@angular/core';
import { smoothlyMenu } from "../../app.helpers";
import * as jQuery from 'jquery';
import { LogService } from 'src/app/services/logService/log.service';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import {  Router } from '@angular/router';


@Component({
  selector: 'topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {

  constructor(public log : LogService, private afAuth:AngularFireAuth , private router:Router) { }

  ngOnInit(): void {
  }
  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
    smoothlyMenu();
  }
  signout() {
    console.log("loggedout");
    this.afAuth.auth.signOut();
    this.log.logged = false;
    console.log(this.log.logged);
    this.router.navigate(["login"]);
  }
  user_has_logged = this.log.getlog();
}
