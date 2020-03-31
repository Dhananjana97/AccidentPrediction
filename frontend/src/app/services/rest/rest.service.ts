import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  testApi(): Observable<any> {
    return this.http.get("http://localhost:3001/api/external");
  }
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
    if (role == "Admin") { role = ["Admin", "Staff", "Guest"] }
    else if (role == "Staff") { role = ["Staff", "Guest"] }
    else if (role == "Officer") { role = ["Guest"] }

    return this.http.post("https://pzodbmbt6a.execute-api.us-east-2.amazonaws.com/user/roleassign", { roleAssigningUserId: uid, assigningRoleName: role })
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


  getUserData() {
    var k =  [
      {
        "userId": "JKZRNa2I1SU7tUvcqAPET1J0enJ3",
        "name": "wddwd@uuuuu.uu",
        "emailAddress": "wddwd@uuuuu.uu",
        "rank": "Rank1",
        "status": 0,
        "roles": [1]
      },
      {
        "userId": "JKZRNa2I1SU7tUvcqAPET1J0enJ3",
        "name": "chalieeee@uuuuu.uu",
        "emailAddress": "sdsd@uuuuu.uu",
        "rank": "Rank1",
        "status": 0,
        "roles": [1,2]
      }
    ]
    for (let l of k){
      if(l["roles"].length==1){
        l["user_type"]="Officer";
      }
      else if(l["roles"].length==2){
        l["user_type"]="Staff";
      }
      else if(l["roles"].length==3){
        l["user_type"]="Admin";
      }
    }
    return k;
  }
}
