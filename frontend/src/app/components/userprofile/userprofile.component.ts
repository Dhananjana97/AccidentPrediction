import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/logService/log.service';

@Component({
  selector: 'userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private LogService : LogService) { }

  ngOnInit(): void {
  }
  private user_info = this.LogService.getLoginInfo();

  public getUserInfo(property){
    return this.user_info[property];
  }

}
