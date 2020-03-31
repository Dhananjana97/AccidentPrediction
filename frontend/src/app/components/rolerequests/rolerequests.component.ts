import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'rolerequests',
  templateUrl: './rolerequests.component.html',
  styleUrls: ['./rolerequests.component.css']
})
export class RolerequestsComponent implements OnInit {

  constructor(private restService:RestService) { }

  ngOnInit(): void {
  }

  confirm(id){
    console.log("confirmed id==>"+id);
  }
  
  cancel(id){
    console.log("cancelled id==>"+id);
  }
  
  // requests = this.restService.getRoleRequests();


}
