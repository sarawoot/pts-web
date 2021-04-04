import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TokenStorageService } from '../services/token-storage.service';
import { environment } from '../../environments/environment';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenStorageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(
        (err: HttpErrorResponse): Observable<any> => {
          if (err.status === 401 || err.status === 403) {
            this.tokenService.clear();
            window.location.pathname = environment.loginPath;
          }

          const errMsg = err.error.message || err.statusText;
          return throwError(errMsg);
        }
      )
    );
  }
}

export const errorInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
