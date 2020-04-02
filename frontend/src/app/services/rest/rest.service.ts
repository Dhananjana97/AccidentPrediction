import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from './../logService/log.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private host_url = "https://pzodbmbt6a.execute-api.us-east-2.amazonaws.com/";

  sendFirstUser(data): Observable<any> {
    return this.http.post(this.host_url +"user/usersignup", data)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  requestUserDetails() {
    return this.http.get(this.host_url+"user/getmebyid")
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  changeUserProfile(name, rank) {
    console.log("bla bla bla")
    return this.http.post(this.host_url+"user/updateuser", { name: name, rank: rank })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  assignRole(uid, role) {
    return this.http.post(this.host_url+"user/roleassign", { roleAssigningUserId: uid, assigningRoleName: [role] })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  deleteRole(uid, role) {
    return this.http.request('delete',this.host_url+"user/roleremove",{body:{ roleAssigningUserId: uid, removingRoles: [role] }} )
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  getAllUserData():Observable<User[]> {
    return this.http.get<User[]>(this.host_url+"user/getallusers/1")
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  getAllAccidents(date,city,page){
    return this.http.post(this.host_url+"accident/getaccidentsbyfilter",{date:date,city:city,pageNumber:page})
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  getAllNonApprovedData():Observable<User[]>{
    return this.http.get<User[]>(this.host_url+"user/getallusers/0")
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  approveuser(uid,email){
    return this.http.put(this.host_url+"user/approveUser",{userId:uid,emailAddress:email})
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
  addAccident(data){
    console.log(data);
    return this.http.post(this.host_url+"accident/insertaccident",data)
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
  editAccident(data){
    return this.http.put(this.host_url+"accident/updateaccident",data)
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }
  deleteAccident(uid){
    return this.http.delete(this.host_url+"accident/deleteaccident/"+uid)
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  getAccidentPrediction(data){
    return this.http.post("https://pzodbmbt6a.execute-api.us-east-2.amazonaws.com/live/accidentprediction", data);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(error.error.message);
  };
}
