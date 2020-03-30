import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest/rest.service';
import { LogService } from 'src/app/services/logService/log.service';
import { SystemRoles } from './../../systemData/systenRoles';

@Component({
  selector: 'manageroles',
  templateUrl: './manageroles.component.html',
  styleUrls: ['./manageroles.component.css']
})
export class ManagerolesComponent implements OnInit {

  constructor(
    private restService: RestService,
    private log : LogService
  ) { }

  ngOnInit(): void {
  }

  systemRoles: string[] = SystemRoles;

  userData = this.getUserData();

  getUserData() {
    console.log(this.systemRoles);
    let temp_user_data = this.restService.getUserData();
    for (let user of temp_user_data) {
      user["other_roles"] = this.getOtherRoles(user["current_role"],this.systemRoles);
    }
    return temp_user_data;
  }

  getOtherRoles(role: string,systemRoles: string[]) {
    console.log(role+"====."+systemRoles)
    return this.log.getOtherRoles(role,systemRoles);
  }

  showProfile(userId) {
    console.log("profile" + userId);
  }

  changeRole(userId,newRole){
    console.log(userId +" is going to be "+ newRole);
    this.userData = this.getUserData();
  }
}
