import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest/rest.service';
import { LogService, User } from 'src/app/services/logService/log.service';
import { SystemRoles } from './../../systemData/systenRoles';
import { EditprofileComponent } from '../dialogs/editprofile/editprofile.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AreyousureComponent } from '../dialogs/areyousure/areyousure.component';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

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
    private router: Router,
    private snackBar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.setAllUsers();
  }


  systemRoles: string[] = SystemRoles;

  public userData;


  public setAllUsers() {
    this.restService.getAllUserData().subscribe(
      (success) => {
        let temp_user_data = success;
        for (let user of temp_user_data) {
          let current_roles = this.getOwnRoles(user["roles"]);
          user["other_roles"] = this.getOtherRoles(current_roles, this.systemRoles);
          user["own_roles"] = current_roles;
        }
        this.userData = temp_user_data;
      },
      (error) => {
        this.snackBar.openSnackBar("Something went wrong. Try again!", "error");
      }
    )
  }

  private getOtherRoles(role_list, systemRoles) {
    let temp_other_list = [];
    for (let role of systemRoles) {
      if (role_list.indexOf(role) == -1) {
        temp_other_list.push(role);
      }
    }
    return temp_other_list;
  }

  private getOwnRoles(roles) {
    let temp_roles = [];
    for (let role of roles) {
      temp_roles.push(role["roleName"]);
    }
    return temp_roles;
  }


  public editProfile(user) {
    let new_user_obejct = this.clone(user);
    let dialogRef = this.dialog.open(EditprofileComponent, { data: new_user_obejct });
    dialogRef.afterClosed().subscribe(result => {
      if (result == false) {
        return null;
      }
      else{
        this.restService.editUserProfile(result).subscribe(
        (success)=>{
          this.snackBar.openSnackBar("User profile changed successfully","success");
          this.userData = this.setAllUsers();
        },
        (error)=>{
          this.snackBar.openSnackBar("Something went wrong. Please try again later!","error");
          console.log(error);
          return null;
        });
      }
    });
  }

  public addRole(userId, newRole, name) {
    let dialogRef = this.dialog.open(AreyousureComponent, { data: "Are you sure want to add " + newRole + " to " + name + "'s roles?" });
    dialogRef.afterClosed().subscribe(result => {

      if (result == false) {
        return null;
      }
      else if (result == true) {
        this.restService.assignRole(userId, newRole).subscribe(
          (success) => {
            this.userData = this.setAllUsers();
            this.snackBar.openSnackBar("User role assigned successfully!", "success");
          },
          (error) => {
            window.alert(error);
            this.userData = this.setAllUsers();
            this.snackBar.openSnackBar("Something went wrong. Please try again!", "error");
          }
        )
      }
    });
  }

  public deleteRole(userId, newRole, name) {
    let dialogRef = this.dialog.open(AreyousureComponent, { data: "Are you sure want to delete " + newRole + " from " + name + "'s roles?" });
    dialogRef.afterClosed().subscribe(result => {
      if (result == false) {
        return null;
      }
      else if (result == true) {
        this.restService.deleteRole(userId, newRole).subscribe(
          (success) => {
            this.userData = this.setAllUsers();
            this.snackBar.openSnackBar("User role changed successfully!", "success");
          },
          (error) => {
            window.alert(error);
            this.userData = this.setAllUsers();
            this.snackBar.openSnackBar("Something went wrong. Please try again!", "error");
          }
        )
      }
    });
  }
  private clone(accident_object) {
    let temp_object = {};
    for (let key of Object.keys(accident_object)) {
      temp_object[key] = accident_object[key];
    }
    return temp_object;
  }
}
