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
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiaWFuY3V0cnVtcEBnbWFpbC5jb20iLCJpYXQiOjE3MTQ0NjkwNjUsImV4cCI6MTcxNDU1NTQ2NX0.ufZhaDjw5pPv2Yc5rZu6XMhOQ2k7GuSb1C-YWtu7boM`,
  }) as any;
  getCards = this.httpClient.get(this.overViewToken + '', {
    headers: this.headers,
  });
}
