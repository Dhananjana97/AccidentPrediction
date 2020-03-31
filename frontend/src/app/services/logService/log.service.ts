import { Injectable } from '@angular/core';
import { priviledges } from '../../systemData/priviledges';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogService {


  constructor(private router: Router) {

  }
  private logged: boolean = false;
  private priviledges_list = priviledges;
  private loginInfo = {};

  public setUserLogStatus(data) {
    this.loginInfo = {
      name:data.name,
      rank:data.rank,
      priviledges: this.getPriviledgeList(data.roles),
      uid:data.userId,
      email:data.emailAddress,
      roles:this.setRoles(data.roles)
    }
    this.logged = true;
  }

  o = { 
    "userId": "JKZRNa2I1SU7tUvcqAPET1J0enJ3",
     "name": "wddwd@uuuuu.uu",
    "emailAddress": "wddwd@uuuuu.uu",
     "rank": "Rank1",
      "status": 0,
       "roles": null }

  public setLog(bool) {
    this.logged = bool;
  }

  public getLog() {
    return this.logged;
  }

  public getLoginInfo() {
    return this.loginInfo;
  }

  public getRoles() {
    return this.loginInfo["roles"];
  }

  private setRoles(roles){
    let temp_roles = [];
    for ( let role of roles ){
      temp_roles.push(role["roleName"]);
    }
    return temp_roles;
  }



  private getPriviledgeList(roles){
    let temp_prviledges = [];
    for (let role of roles){
      for ( let priviledge of this.priviledges_list[role["roleName"]] ){
        temp_prviledges.push(priviledge);
      }
    }
    return temp_prviledges;
  }
}

export interface User  
{
  userId:String,
  name:String,
  emailAddress:String,
  rank:String,
  status:Number,
  roles:{
    roleName:String,
    roleId:Number
  }
}