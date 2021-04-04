import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from '../../environments/environment';

export class LoginReq {
  email!: string;
  passwors!: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenService {
  httpHearders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  handleError(error: HttpErrorResponse): Observable<any> {
    let errMsg = '';
    if (error.error instanceof ErrorEvent) {
      // client error
      errMsg = error.error.message;
    } else {
      // server error
      errMsg = `code: ${error.status}, msg: ${error.message}`;
    }
    console.log(errMsg);
    return throwError(errMsg);
  }

  login(req: LoginReq): Observable<any> {
    const url = `${environment.api.loginURL}`;
    return this.httpClient.post(url, req, { headers: this.httpHearders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
}
