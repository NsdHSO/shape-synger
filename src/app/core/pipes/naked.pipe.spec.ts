import { TestBed } from '@angular/core/testing';

import { signal } from '@angular/core';

import { NakedPipe } from './naked.pipe';
import { CoreService } from '../core.service';

describe('NakedPipe', () => {
  const setup = (coreService: unknown) => {
    return TestBed.configureTestingModule({
      providers: [NakedPipe, { provide: CoreService, useValue: coreService }],
    }).inject(NakedPipe);
  };
  it('create an instance', () => {
    const pipe = setup({});
    expect(pipe).toBeTruthy();
  });

  it('should add base project', () => {
    const pipe = setup({ baseApp: signal('core') });
    expect(pipe.transform('Ivan')).toEqual('core_Ivan');
  });
});
