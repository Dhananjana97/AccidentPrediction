import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest/rest.service';
import { LogService } from 'src/app/services/logService/log.service';
import { SystemRoles } from './../../systemData/systenRoles';
import { EditprofileComponent } from '../dialogs/editprofile/editprofile.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AreyousureComponent } from '../dialogs/areyousure/areyousure.component';

@Component({
  selector: 'manageroles',
  templateUrl: './manageroles.component.html',
  styleUrls: ['./manageroles.component.css']
})
export class ManagerolesComponent implements OnInit {

  constructor(
    private restService: RestService,
    private dialog: MatDialog,
    private log: LogService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  systemRoles: string[] = SystemRoles;

  public userData = this.getUserData();

  getUserData() {
    let temp_user_data = this.restService.getUserData();
    for (let user of temp_user_data) {
      user["other_roles"] = this.getOtherRoles(user["user_type"], this.systemRoles);
    }
    return temp_user_data;
  }

  getOtherRoles(role: string, systemRoles: string[]) {
    return this.log.getOtherRoles(role, systemRoles);
  }


  editProfile(user) {
    let dialogRef = this.dialog.open(EditprofileComponent, { data: user });
    dialogRef.afterClosed().subscribe(result => {
      console.log(typeof (result));
      if (result == false) {
        console.log("success no");
        return null;
      }
      else if( result== true){
        this.userData = this.getUserData();
        console.log("success ");
      }
    });
  }

  changeRole(userId, newRole, name) {
    let dialogRef = this.dialog.open(AreyousureComponent, { data: "Are you sure want to change " + name + "'s role to " + newRole + "?" });
    dialogRef.afterClosed().subscribe(result => {
      if (result == false) {
        console.log("success nope");
        return null;
      }
      else if (result == true) {
        this.restService.assignRole(userId, newRole).subscribe(
          (success) => {
            this.userData = this.getUserData();
            console.log("success ");
          },
          (error) => {
            window.alert(error);
            this.userData = this.getUserData();
            console.log("success no");
          }
        )
      }
    });
  }
}
