import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  logged: boolean = true;
  
  user_type : string = "Admin";

  priviledges = {
    Admin: ["Admin_task_1", "Admin_task_2", "Admin_task3"],
    Staff: ["Staff_task_1", "Staff_task_2"],
    Officer: ["Officer_task_1"]
  };

  loginInfo = {
    user_type: this.user_type,
    priviledges: this.priviledges[this.user_type],
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
  
}
