import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor() { }

  getRoleRequests(){
    return   [
      {
        id:"123",
        name:"ashan",
        current_role:"sci",
        requested_role:"sergeion",
        description:"qualifications",
        requested_date:"aaaaaaaaaaaaaaa"
      },
      {
        id:"1234",
        name:"ashan",
        current_role:"sci",
        requested_role:"sergeion",
        description:"qualifications",
        requested_date:"aaaaaaaaaaaaaaa"
      },
      {
        id:"12345",
        name:"ashan",
        current_role:"sci",
        requested_role:"sergeion",
        description:"qualifications",
        requested_date:"aaaaaaaaaaaaaaa"
      }
    ];
  }
}
