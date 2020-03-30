import { Injectable } from '@angular/core';
import { priviledges } from '../../systemData/priviledges';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogService {


  constructor(private router: Router) {

  }

  logged: boolean = false;
  
  user_type : string = "Admin";

  priviledges_list = priviledges;

  loginInfo = {
    user_type: this.user_type,
    priviledges: this.priviledges_list[this.user_type],
    first_name: 'Andrew',
    last_name: 'Yang',
    avatar: 'ay.jpeg',
    title: 'Senior Developer'
  };

  setlog(bool) {
    this.logged = bool;
  }

  getlog() {
    return this.logged;
  }

  getLoginInfo(){
    return this.loginInfo;
  }

  getUserType(){
    return this.user_type;
  }
  
  getOtherRoles(role: string, systemRoles: string[]) {
    let temp_system_roles = []
    for (let x  of systemRoles){
      if (x!=role){
        temp_system_roles.push(x);
      }
    }
    return temp_system_roles;
  }

  // getTokenSilently$(options?): Observable<string> {
  //   return this.auth0Client$.pipe(
  //     concatMap((client: Auth0Client) => from(client.getTokenSilently(options)))
  //   );
  // }

}