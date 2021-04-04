import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from '../../environments/environment';

export class NewUser {
  email!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  officeID!: string;
  positionID!: string;
  roles!: string[];
}

export class UpdateUser {
  firstName!: string;
  lastName!: string;
  officeID!: string;
  positionID!: string;
  roles!: string[];
}

const apiURL = environment.api.userURL;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  // Get all user
  getUsers(): Observable<any> {
    return this.httpClient.get(apiURL, httpOptions).pipe(
      map((res: any) => {
        return res || [];
      }),
      catchError(this.handleError)
    );
  }

  // Get user by id
  getUser(id: any): Observable<any> {
    const url = `${apiURL}/${id}`;
    return this.httpClient.get(url, httpOptions).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Create user
  createUser(data: NewUser): Observable<any> {
    return this.httpClient
      .post(apiURL, data, httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Update user
  updateUser(id: any, data: UpdateUser): Observable<any> {
    const url = `${apiURL}/${id}`;
    return this.httpClient
      .put(url, data, httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Delete user
  deleteUser(id: any): Observable<any> {
    const url = `${apiURL}/${id}`;
    return this.httpClient
      .delete(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Error
  handleError(error: HttpErrorResponse): Observable<any> {
    let errMsg = '';
    if (error.error instanceof ErrorEvent) {
      // client error
      errMsg = error.error.message;
    } else {
      // server error
      errMsg = `Error Code: ${error.status},${error.statusText}\nMsg: ${error.message}`;
    }
    console.log(errMsg);
    return throwError(errMsg);
  }
}
