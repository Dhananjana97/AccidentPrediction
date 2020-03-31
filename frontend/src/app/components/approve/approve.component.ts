import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  constructor(private restService: RestService) { }

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
        console.log(error);
      }
    )
  }

  approveUser(uid,email){
    this.restService.approveuser(uid,email).subscribe(
      (success)=>{
        window.alert("suxex");
        this.setAllNonApprovedusers();
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
