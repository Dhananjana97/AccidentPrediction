import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest/rest.service';
import { LogService, User } from 'src/app/services/logService/log.service';
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
    this.setAllUsers();
  }
  

  systemRoles: string[] = SystemRoles;

  public userData ;


  setAllUsers(){
      this.restService.getAllUserData().subscribe(
        (success)=>{
          let temp_user_data  = success;
          for (let user of temp_user_data) {
            let current_roles = this.getOwnRoles(user["roles"]);
            user["other_roles"] = this.getOtherRoles(current_roles, this.systemRoles);
            user["own_roles"] = current_roles;
          }
          this.userData =  temp_user_data;
        },
        (error)=>{
          console.log(error);
        }
      )
  }

  getOtherRoles(role_list, systemRoles) {
    let temp_other_list = [];
    for (let role of systemRoles){
      if (role_list.indexOf(role)== -1){
        temp_other_list.push(role);
      }
    }
    return temp_other_list;
  }

  getOwnRoles(roles){
    let temp_roles = [];
    for (let role of roles){
      temp_roles.push(role["roleName"]);
    }
    return temp_roles;
  }


  editProfile(user) {
    let dialogRef = this.dialog.open(EditprofileComponent, { data: user });
    dialogRef.afterClosed().subscribe(result => {
      if (result == false) {
        console.log("success no");
        return null;
      }
      else if( result== true){
        this.userData = this.setAllUsers();
        console.log("success ");
      }
    });
  }

  addRole(userId, newRole, name){
    let dialogRef = this.dialog.open(AreyousureComponent, { data: "Are you sure want to add " + newRole +" to " + name + "'s roles?" });
    dialogRef.afterClosed().subscribe(result => {

      if (result == false) {
        console.log("success nope");
        return null;
      }
      else if (result == true) {
        this.restService.assignRole(userId, newRole).subscribe(
          (success) => {
            this.userData = this.setAllUsers();
            console.log(success);
          },
          (error) => {
            window.alert(error);
            this.userData = this.setAllUsers();
            console.log("success no");
          }
        )
      }
    });
  } 

  deleteRole(userId, newRole, name){
    let dialogRef = this.dialog.open(AreyousureComponent, { data: "Are you sure want to delete " + newRole +" from " + name + "'s roles?" });
    dialogRef.afterClosed().subscribe(result => {
      if (result == false) {
        console.log("success nope");
        return null;
      }
      else if (result == true) {
        this.restService.deleteRole(userId, newRole).subscribe(
          (success) => {
            this.userData = this.setAllUsers();
            console.log(success);
          },
          (error) => {
            window.alert(error);
            this.userData = this.setAllUsers();
            console.log("success no");
          }
        )
      }
    });
  }

}
