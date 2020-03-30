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
    return this.http.post("http://localhost:3001/api/external",data)
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
    return [
      {
        id: "123",
        name: "ashan",
        current_role: "Staff",
        description: "i am a agood",
        registered_date: "123131"
      },
      {
        id: "234",
        name: "sandeepa",
        current_role: "Admin",
        description: "i am a agood",
        registered_date: "3232323"
      }
    ]
  }


  getRoleRequests() {
    return [
      {
        id: "123",
        name: "ashan",
        current_role: "sci",
        requested_role: "sergeion",
        description: "qualifications",
        requested_date: "aaaaaaaaaaaaaaa"
      },
      {
        id: "1234",
        name: "ashan",
        current_role: "sci",
        requested_role: "sergeion",
        description: "qualifications",
        requested_date: "aaaaaaaaaaaaaaa"
      },
      {
        id: "12345",
        name: "ashan",
        current_role: "sci",
        requested_role: "sergeion",
        description: "qualifications",
        requested_date: "aaaaaaaaaaaaaaa"
      }
    ];
  }
}
