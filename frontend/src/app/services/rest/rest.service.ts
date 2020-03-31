import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from './../logService/log.service';
import { Accident } from 'src/app/components/accidentdetails/accidentdetails.component';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }


  sendFirstUser(data): Observable<any> {
    return this.http.post("https://pzodbmbt6a.execute-api.us-east-2.amazonaws.com/user/usersignup", data)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  requestUserDetails() {
    return this.http.get("https://pzodbmbt6a.execute-api.us-east-2.amazonaws.com/user/getmebyid")
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  changeUserProfile(name, rank) {
    console.log("bla bla bla")
    return this.http.post("https://pzodbmbt6a.execute-api.us-east-2.amazonaws.com/user/updateuser", { name: name, rank: rank })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  assignRole(uid, role) {
    return this.http.post("https://pzodbmbt6a.execute-api.us-east-2.amazonaws.com/user/roleassign", { roleAssigningUserId: uid, assigningRoleName: [role] })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  deleteRole(uid, role) {
    return this.http.post("https://pzodbmbt6a.execute-api.us-east-2.amazonaws.com/user/roleremove", { roleAssigningUserId: uid, removingRoles: [role] })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  getAllUserData():Observable<User[]> {
    return this.http.get<User[]>("https://pzodbmbt6a.execute-api.us-east-2.amazonaws.com/user/getallusers/1")
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  getAllAccidents():Observable<Accident[]>{
    return this.http.get<Accident[]>("https://pzodbmbt6a.execute-api.us-east-2.amazonaws.com/user/getadllusers/1")
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  getAllNonApprovedData():Observable<User[]>{
    return this.http.get<User[]>("https://pzodbmbt6a.execute-api.us-east-2.amazonaws.com/user/getallusers/0")
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  approveuser(uid,email){
    return this.http.put("https://pzodbmbt6a.execute-api.us-east-2.amazonaws.com/user/approveUser",{userId:uid,emailAddress:email})
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };


  getUsecrData() {
    var k = [
      {
        "userId": "JKZRNa2I1SU7tUvcqAPET1J0enJ3",
        "name": "wddwd@uuuuu.uu",
        "emailAddress": "wddwd@uuuuu.uu",
        "rank": "Rank1",
        "status": 0,
        "roles": [{ roleName: "Admin", roleId: 1 }, { roleName: "Staff", roleId: 2 }, { roleName: "Guest", roleId: 3 }]
      },
      {
        "userId": "JKZRNa2I1SU7tUvcqAPET1J0enJ3",
        "name": "chalieeee@uuuuu.uu",
        "emailAddress": "sdsd@uuuuu.uu",
        "rank": "Rank1",
        "status": 0,
        "roles": [{ roleName: "Admin", roleId: 1 }, { roleName: "Guest", roleId: 3 }]
      }
    ]
    return k;
  }
}
