import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import * as uuidv4 from 'uuid';

import { GOOGLE_PROP } from '../auth.module';
import { WINDOW } from '../../../app.module';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  /**
   * Instance of HttpService
   */
  private readonly httpInstance = inject(HttpClient);

  /**
   * Instance of env Token
   */
  private readonly googleToken = inject(GOOGLE_PROP);

  /**
   *
   * @private
   */
  private readonly windowToken = inject(WINDOW);
  private tempID = '';

  public async googleAuth(): Promise<void> {
    const url = this.getGoogleLoginURL();
    const authWindow = await this.windowToken.open(url, '', 'popup=true');

    if (authWindow) {
      const checkPopupWindow = setInterval(() => {
        if (authWindow.closed) {
          clearInterval(checkPopupWindow);
          if (this.tempID) {
            this.loginGoogle(this.tempID);
            this.tempID = '';
          }
        }
      });
    }
  }

  /**
   *
   * @param id
   * @private
   */
  private loginGoogle(id: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${id}`,
    });

    this.httpInstance
      .post<{ data: string }>(this.googleToken.loginURL, {}, { headers })
      .pipe(map((response) => JSON.parse(atob(response.data))))
      .subscribe((data) => console.log(data.email));
  }

  private getGoogleLoginURL() {
    const state = uuidv4.v4();
    this.tempID = state;
    const googleAuth = this.googleToken.authLoginUrl;
    const loginRequestParameters: { [key: string]: string } = {
      response_type: this.googleToken.responseType,
      redirect_uri: this.googleToken.redirect_uri,
      scope: this.googleToken.scope,
      client_id: this.googleToken.client_id,
      state,
    };

    const paramsString = Object.keys(loginRequestParameters)
      .map((key) => `${key}=${encodeURIComponent(loginRequestParameters[key])}`)
      .join('&');

    return `${googleAuth}?${paramsString}`;
  }
}
