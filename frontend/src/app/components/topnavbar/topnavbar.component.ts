import { Component, OnInit } from '@angular/core';
import { smoothlyMenu } from "../../app.helpers";
import * as jQuery from 'jquery';

@Component({
  selector: 'topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
    smoothlyMenu();
  }
  logout() {
    localStorage.clear();
    // location.href='http://to_login_page';
  }
}
