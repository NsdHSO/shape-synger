import { Component, inject } from '@angular/core';

import { AuthService } from './services/auth.service';
import { AuthApiService } from './services/auth-api.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [AuthService],
})
export class AuthComponent {
  authService = inject(AuthApiService);

  logInGoogle() {
    this.authService.googleAuth();
  }
}
