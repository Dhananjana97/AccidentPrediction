import { Component, OnInit } from '@angular/core';
import { SysdataService } from 'src/app/services/syaData/sysdata.service';
import { RestService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'manageroles',
  templateUrl: './manageroles.component.html',
  styleUrls: ['./manageroles.component.css']
})
export class ManagerolesComponent implements OnInit {

  constructor(
    private sysDataService: SysdataService,
    private restService: RestService
  ) { }

  ngOnInit(): void {
  }

  systemRoles: string[] = this.sysDataService.getSystemRoles();

  userData = this.getUserData();

  getUserData() {
    let temp_user_data = this.restService.getUserData();
    for (let user of temp_user_data) {
      user["other_roles"] = this.getOtherRoles(user["current_role"], this.systemRoles);
    }
    return temp_user_data;
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

  showProfile(userId) {
    console.log("profile" + userId);
  }

  changeRole(userId,newRole){
    console.log(userId +" is going to be "+ newRole);
    this.userData = this.getUserData();
  }
}
