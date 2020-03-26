import { Injectable } from '@angular/core';
import { priviledges } from './../../Roles/roles';

import { from, of, Observable, BehaviorSubject, combineLatest, throwError } from 'rxjs';
import { tap, catchError, concatMap, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogService {


  constructor(private router: Router) {

  }

  logged: boolean = true;
  
  user_type : string = "Staff";

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


  // getTokenSilently$(options?): Observable<string> {
  //   return this.auth0Client$.pipe(
  //     concatMap((client: Auth0Client) => from(client.getTokenSilently(options)))
  //   );
  // }

}