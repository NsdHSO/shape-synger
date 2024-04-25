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
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiaWFuY3V0cnVtcEBnbWFpbC5jb20iLCJpYXQiOjE3MTQwMTc3OTksImV4cCI6MTcxNDEwNDE5OX0.6n-l1oWUaM8CiHjFYXH2-C8mLXHNPO1r9HJHWHRgGps`,
  }) as any;
  getCards = this.httpClient.get(this.overViewToken + '', {
    headers: this.headers,
  });
}
