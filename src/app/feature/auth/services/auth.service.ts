import { inject, Injectable } from '@angular/core';

import { of, tap } from 'rxjs';

import { AuthApiService } from './auth-api.service';

@Injectable()
export class AuthService {
  /**
   * Instance of auth api
   */
  private readonly authApiService = inject(AuthApiService);

  googleAuth$ = of('asfsf').pipe(
    tap(() => {
      window.open('http://localhost:3000/auth/google');
    }),
  );
}
