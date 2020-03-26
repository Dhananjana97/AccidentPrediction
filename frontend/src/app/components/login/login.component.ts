import { Component, OnInit } from '@angular/core';
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

  constructor(public log: LogService, public auth: AngularFireAuth, private router:Router) { }

  ngOnInit(): void {
  }
  printUser(event){
    this.log.logged = true;
    console.log(firebase.auth().currentUser.getIdToken());
    this.router.navigate(["home/dashboard"]);
    
  }
}
