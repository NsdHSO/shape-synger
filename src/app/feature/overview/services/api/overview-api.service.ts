import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { API_URL } from '../../overview.module';

@Injectable()
export class OverviewApiService {
  /**
   * Instance of HttpClient
   * @private
   */
  private readonly httpClient = inject(HttpClient);

  private readonly overViewToken = inject(API_URL);
  headers = new Headers({
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aGlyZFBhcnR5SWQiOiIxMDY3NjY2NDU5MDEwNDU5MzcwODYiLCJwcm92aWRlciI6Imdvb2dsZSIsImlhdCI6MTcxNDg2MDg1NiwiZXhwIjoxNzE0ODY0NDU2fQ.VQcP6yzex2pYXu5zbFVl6SAjsXteM4a0EgKakImCRDs`,
  }) as any;
  getCards = this.httpClient.get(this.overViewToken + '', {
    headers: this.headers,
  });
}
