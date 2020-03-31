import { Component, OnInit, Inject } from '@angular/core';
import { RestService } from 'src/app/services/rest/rest.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ranks } from 'src/app/systemData/systenRoles';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, public rest: RestService) { }

  ngOnInit(): void {
  }

  private ranks = Ranks;
  private editMode = true;
  private successMode = false;

  public getUserInfo(property) {
    return this.data[property];
  }
  public getEditMode() {
    return this.editMode;
  }
  public editProfile(name, rank) {
    this.rest.changeUserProfile(name, rank).subscribe(
      (success) => {
        console.log(success);
        this.changeEditMode(false);
        this.changeSuccessMode(true);
      },
      (error) => {
        console.log(error);
        this.changeEditMode(false);
        this.changeSuccessMode(false);
      });
  }
  public getRanks() {
    return this.ranks;
  }
  public changeEditMode(bool) {
    this.editMode = bool;
  }
  public changeSuccessMode(bool) {
    this.successMode = bool;
  }
  public getSuccessMode(){
    return this.successMode;
  }

}
