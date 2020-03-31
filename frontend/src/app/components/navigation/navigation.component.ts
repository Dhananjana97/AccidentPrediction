import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from 'src/app/services/logService/log.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() loginInfo;
  constructor( private router: Router, private log: LogService) { }

  ngOnInit() { }
  activeRoute(routename: string): boolean{
      return this.router.url.indexOf(routename.trim().toLowerCase()) > -1;
  }
  
}
