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
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiaWFuY3V0cnVtcEBnbWFpbC5jb20iLCJpYXQiOjE3MTQxMTgzNTcsImV4cCI6MTcxNDIwNDc1N30.AMdmeZOjwCarArk5ENWRozMLvKokW5h3PhZxjSjaH2M`,
  }) as any;
  getCards = this.httpClient.get(this.overViewToken + '', {
    headers: this.headers,
  });
}
