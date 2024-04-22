import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardEntryComponent } from './card-entry.component';

describe('CardEntryComponent', () => {
  let component: CardEntryComponent;
  let fixture: ComponentFixture<CardEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CardEntryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
