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
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiaWFuY3V0cnVtcEBnbWFpbC5jb20iLCJpYXQiOjE3MTQxOTkzODQsImV4cCI6MTcxNDI4NTc4NH0.EfmSkJzbA25f86akafnIGw4CLEBk3KHNA5wedX5ncYE`,
    'Access-Control-Allow-Origin': '*',
  }) as any;
  getCards = this.httpClient.get(this.overViewToken + '', {
    headers: this.headers,
  });
}
