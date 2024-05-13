import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';
import * as uuidv4 from 'uuid';

import { NavController, ToastController } from '@ionic/angular';

import { GOOGLE_PROP } from '../auth.module';
import { WINDOW } from '../../../app.module';
import { LocalStorageService } from '../../../core/localStorage/local-storage.service';
import { keyForAuth } from '../../../core/constants';

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
   * Instance of local storage
   * @private
   */
  private readonly localStorage = inject(LocalStorageService);

  /**
   * Instance of navigation service
   * @private
   */
  private readonly navigationService = inject(NavController);
  /**
   * Instance of toast service
   * @private
   */
  private readonly toastController = inject(ToastController);
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
   * Set the data into localStorage
   * @param data
   */
  setDataIntoLocalStorage(data: unknown): void {
    this.localStorage.setItem(keyForAuth, JSON.stringify(data));
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
      .pipe(
        map((response) => JSON.parse(atob(response.data))),
        tap((data) => this.setDataIntoLocalStorage(data)),
        tap(() => {
          this.navigationService.navigateForward('');
        }),
        catchError((err) => {
          this.toastController.create({
            message: 'Error Server',
            duration: 5000,
            position: 'top',
            animated: true,
          });
          return err;
        }),
      )
      .subscribe();
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
