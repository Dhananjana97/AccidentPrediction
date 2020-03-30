import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'app-role-request-dialog',
  templateUrl: './role-request-dialog.component.html',
  styleUrls: ['./role-request-dialog.component.css']
})
export class RoleRequestDialogComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) public data, public rest : RestService){}
  ngOnInit(): void {
  }

  role_selected = "";

}
