import { Component, OnInit, Inject } from '@angular/core';
import { RestService } from 'src/app/services/rest/rest.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ranks } from 'src/app/systemData/systenRoles';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, public rest: RestService, private dialogRef : MatDialogRef<EditprofileComponent>) { }

  ngOnInit(): void {
  }

  private ranks = Ranks;

  public getUserInfo(property) {
    return this.data[property];
  }

  public getRanks() {
    return this.ranks;
  }
}
