import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Card } from '../../type/overview.type';
import { API_URL } from '../../overview.module';

@Injectable()
export class OverviewApiService {
  /**
   * Http Instance
   */
  private readonly httpClient = inject(HttpClient);
  /**
   * Get toke for envApi
   * @private
   */
  private readonly envApi = inject(API_URL);
  getCards = this.httpClient.get<Card[]>(`${this.envApi}`);
}
