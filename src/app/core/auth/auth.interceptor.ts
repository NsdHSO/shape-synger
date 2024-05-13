import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { catchError, EMPTY, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { LocalStorageService } from '../localStorage/local-storage.service';
import { keyForAuth } from '../constants';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  /**
   * Instance of Local storage
   */
  const localStorage = inject(LocalStorageService);
  /**
   * Instance of Router
   */
  const router = inject(Router);
  const currentJWT = localStorage.getItem(keyForAuth)['jwt'];

  if (currentJWT) {
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentJWT}`,
      },
    });
  }

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err instanceof HttpErrorResponse && err.status === 401) {
        router.navigate(['login']);
        // Return an empty observable to prevent further error handling

        localStorage.deleteItem(keyForAuth);
        return EMPTY;
      }
      return throwError(() => err);
    }),
  );
};
