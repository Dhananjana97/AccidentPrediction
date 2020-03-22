import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SysdataService {

  constructor() { }

  private systemRoles = ["Admin", "Staff", "Officer"];
  
  getSystemRoles(){
    return this.systemRoles;
  }

}
