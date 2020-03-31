import { CanActivate, Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { LogService } from '../services/logService/log.service';

@Injectable()

export class AdminGuard implements CanActivate {
    constructor(private logService:LogService, public router: Router){}

    canActivate() {
        if (this.logService.getRoles().indexOf("Admin") != -1){
            return true;
        }
        this.router.navigate(["login"]);
    }
}

@Injectable()
export class StaffGuard implements CanActivate {
    constructor(private logService:LogService, public router: Router){}

    canActivate() {
        if (this.logService.getRoles().indexOf("Staff") != -1 ){
            return true;
        }
        this.router.navigate(["login"]);
    }
}

@Injectable()
export class GuestGuard implements CanActivate {
    constructor(private logService:LogService, public router: Router){}

    canActivate() {
        if (this.logService.getRoles().indexOf("Guest") != -1 ){
            return true;
        }
        this.router.navigate(["login"]);
    }
}

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private logService:LogService,  public router: Router){}

    canActivate() {
        if (this.logService.getLog() == true){
            return true;
        }
        this.router.navigate(["login"]);
    }
}


@Injectable()
export class UnAuthGuard implements CanActivate {
    constructor(private logService:LogService,  public router: Router){}

    canActivate() {
        if (this.logService.getLog() == false){
            return true;
        }
        this.router.navigate(["home"]);
    }
}