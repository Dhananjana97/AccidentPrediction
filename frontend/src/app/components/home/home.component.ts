import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/logService/log.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private log_service : LogService) { }

  ngOnInit(): void {
  }

  loginInfo = this.log_service.getLoginInfo();

}
