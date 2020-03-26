import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  testApi():Observable<any>{
    return this.http.get("http://localhost:3001/api/external");
  }

  getUserData(){
    return [
      {
        id : "123",
        name : "ashan",
        current_role: "Staff",
        description: "i am a agood",
        registered_date: "123131"
      },
      {
        id : "234",
        name : "sandeepa",
        current_role: "Admin",
        description: "i am a agood",
        registered_date: "3232323"
      }
    ]
  }
  

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
