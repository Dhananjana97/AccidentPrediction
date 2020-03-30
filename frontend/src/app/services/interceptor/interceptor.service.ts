import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { LogService } from 'src/app/services/logService/log.service';
import { Observable, throwError, from } from 'rxjs';
import { mergeMap, catchError, switchMap } from 'rxjs/operators';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  // export class InterceptorService  {

  constructor(private log: LogService, public auth: AngularFireAuth) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(firebase.auth().currentUser.getIdToken())
      .pipe(
        switchMap(token => {
          const headers = request.headers
            .set('Authorization', 'Bearer ' + token)
            .append('Content-Type', 'application/json');
          const requestClone = request.clone({
            headers
          });
          return next.handle(requestClone);
        })
      );
  }
}