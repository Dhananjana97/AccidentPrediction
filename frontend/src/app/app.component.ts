import { Component, ViewChild, ElementRef } from '@angular/core';
import { LogService } from './services/logService/log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private logService:LogService, private router:Router){}
  title = 'AccidentAnalyzer';

  user_has_logged = this.logService.getLog();
}
