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
      user_type: this.getRoleFromResponse(2),
      priviledges: this.getPriviledgeList(2),
      uid:data.userId,
      email:data.emailAddress,
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

  public getUserType() {
    return this.loginInfo["user_type"];
  }

  public getOtherRoles(role: string, systemRoles: string[]) {
    let temp_system_roles = []
    for (let x of systemRoles) {
      if (x != role) {
        temp_system_roles.push(x);
      }
    }
    return temp_system_roles;
  }

  private getRoleFromResponse(responseRoleArray){
    return "Admin";
  }

  private getPriviledgeList(responsePreviledge){
    return this.priviledges_list["Admin"];
  }

}