import { CanActivate } from "@angular/router";
import { Injectable } from '@angular/core';
import { LogService } from '../services/logService/log.service';

@Injectable()

export class AdminGuard implements CanActivate {
    constructor(private logService:LogService){}

    canActivate() {
        if (this.logService.getUserType() == "Admin"){
            return true;
        }
        return false;
    }
}

@Injectable()
export class StaffGuard implements CanActivate {
    constructor(private logService:LogService){}

    canActivate() {
        if (this.logService.getUserType() == "Staff" || this.logService.getUserType() == "Staff" ){
            return true;
        }
        return false;
    }
}

@Injectable()
export class OfficerGuard implements CanActivate {
    constructor(private logService:LogService){}

    canActivate() {
        if (this.logService.getUserType() == "Staff" || this.logService.getUserType() == "Staff" ||  this.logService.getUserType() == "Officer" ){
            return true;
        }
        return false;
    }
}