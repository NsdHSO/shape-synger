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

  getCards = this.httpClient.get(this.overViewToken + '');
}
