import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest/rest.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  constructor(
    private restService: RestService,
    private snackbar:SnackbarService
    ) { }

  ngOnInit(): void {
    this.setAllNonApprovedusers();
  }
  public non_approved_users ;

  setAllNonApprovedusers(){
    this.restService.getAllNonApprovedData().subscribe(
      (success)=>{
        this.non_approved_users =  success;
      },
      (error)=>{
        this.snackbar.openSnackBar("Something went wrong. Try again!","error");
      }
    )
  }

  approveUser(uid,email){
    this.restService.approveuser(uid,email).subscribe(
      (success)=>{
        this.snackbar.openSnackBar("User approved successfully!","success");
        this.setAllNonApprovedusers();
      },
      (error)=>{
        this.snackbar.openSnackBar("Something went wrong. Try again!","error");
      }
    )
  }
}
