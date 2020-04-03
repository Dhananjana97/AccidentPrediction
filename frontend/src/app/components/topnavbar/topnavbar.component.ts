import { Component, OnInit } from '@angular/core';
import { smoothlyMenu } from "../../app.helpers";
import * as jQuery from 'jquery';
import { LogService } from 'src/app/services/logService/log.service';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import {  Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RoleRequestDialogComponent } from '../dialogs/role-request-dialog/role-request-dialog.component';
import { SystemRoles } from './../../systemData/systenRoles'


@Component({
  selector: 'topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {

  constructor( public logService : LogService, private afAuth:AngularFireAuth , private router:Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
    smoothlyMenu();
  }
  signout() {
    this.afAuth.auth.signOut();
    this.logService.setLog(false);
    this.router.navigate(["login"]);
  }
  
  user_has_logged = this.logService.getLog();
}
