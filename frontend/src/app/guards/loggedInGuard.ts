import { CanActivate } from "@angular/router";
import { Injectable } from '@angular/core';
import { LogService } from './../services/logService/log.service';

@Injectable()

export class loggedInGuards implements CanActivate {
    constructor(private log:LogService){}

    canActivate() {
        console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
        return this.log.getlog();
    }
}