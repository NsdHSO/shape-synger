import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { BorderColoredDirective } from './border-colored.directive';

describe('BorderColoredDirective', () => {
  const setup = (elementRef: unknown, renderer2: unknown) =>
    TestBed.configureTestingModule({
      providers: [
        BorderColoredDirective,
        {
          provide: ElementRef,
          useValue: elementRef,
        },
        {
          provide: Renderer2,
          useValue: renderer2,
        },
      ],
    }).inject(BorderColoredDirective);

  it('should create an instance', () => {
    const directive = setup({}, {});
    expect(directive).toBeTruthy();
  });
});
