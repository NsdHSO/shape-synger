import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { SupabaseClient } from '@supabase/supabase-js';

import { SupabaseService } from './supabase.service';

function mockData() {
  return [
    { category: 'Employee', id: 1 },
    { category: 'Business', id: 2 },
    { category: 'Operations', id: 3 },
    { category: 'Employee', id: 4 },
    { category: 'Business', id: 5 },
  ];
}

describe('SupabaseService', () => {
  let service: SupabaseService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SupabaseService,
        {
          provide: SupabaseClient,
          useValue: { from: () => ({ select: () => of(mockData()) }) },
        },
      ],
    });
    service = TestBed.inject(SupabaseService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check if return 1 element into array', () => {
    expect(
      service.retrieveAllCardsAndPutIntoNewFormat([{ category: 'Employee' }])
        .length,
    ).toEqual(1);
  });
  it('should check if return 2 element into array', () => {
    expect(
      service.retrieveAllCardsAndPutIntoNewFormat([
        { category: 'Employee' },
        { category: 'Business' },
      ]).length,
    ).toEqual(2);
  });
  it('should check if return 3 element into array', () => {
    expect(
      service.retrieveAllCardsAndPutIntoNewFormat([
        { category: 'Employee' },
        { category: 'Business' },
        { category: 'Business' },
        { category: 'Operations' },
      ]).length,
    ).toEqual(3);
    expect(
      (      service.retrieveAllCardsAndPutIntoNewFormat([
        { category: 'Employee' },
        { category: 'Business' },
        { category: 'Business' },
        { category: 'Operations' },
      ])[1].cards as any).length
    ).toEqual(2);
  });
});
