import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { AuthApiService } from './auth-api.service';

describe('AuthApiService', () => {
  let service: AuthApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(AuthApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return production milk', () => {
    const expected = { accessToken: 'accessToken' };
    let actual;
    service.googleAuth$.subscribe((b) => (actual = b));
    httpMock
      .expectOne('http://localhost:3000/productionMilkWeek')
      .flush({ accessToken: 'accessToken' });
    expect(actual).toEqual(expected);
  });
});
