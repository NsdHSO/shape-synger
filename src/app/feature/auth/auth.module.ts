import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { environment } from '../../../environments/environment';
import { AuthApiService } from './services/auth-api.service';

export const GOOGLE_PROP = new InjectionToken<GoogleAuthConfig>('GOOGLE_API');

export interface GoogleAuthConfig {
  authLoginUrl: string;
  responseType: string;
  redirect_uri: string;
  scope: string;
  client_id: string;
  loginURL:string
}

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule, IonicModule],
  providers: [
    {
      provide: GOOGLE_PROP,
      useValue: environment.login,
    },
    AuthApiService,
  ],
})
export class AuthModule {
}
