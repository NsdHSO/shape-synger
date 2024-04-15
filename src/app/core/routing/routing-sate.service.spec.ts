import { TestBed } from '@angular/core/testing';

import { RoutingSateService } from './routing-sate.service';

describe('RoutingSateService', () => {
  let service: RoutingSateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingSateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
