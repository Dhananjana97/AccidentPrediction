/**
 * Created by andrew.yang on 5/18/2017.
 */
import { OnInit, Component } from "@angular/core";
import { Login } from "./../../models/login";
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {
        this.router.navigate(['/dashboard']);
    }

    loginInfo: Login = {
        first_name: 'Andrew',
        last_name: 'Yang',
        avatar: 'ay.jpeg',
        title: 'Senior Developer'
    };
}