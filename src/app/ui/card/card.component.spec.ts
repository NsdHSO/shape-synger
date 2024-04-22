import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonProgressBar } from '@ionic/angular';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  describe('Init Value', () => {
    let component: CardComponent;
    let fixture: ComponentFixture<CardComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [CardComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(CardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have placeholder', () => {
      const elementTitle = fixture.nativeElement.querySelector(
        '[data-test="ion_card_head-title"]',
      );
      const elementPower = fixture.nativeElement.querySelector(
        '[data-test="ion_card_head_super_script"]',
      );
      const elementIcon = fixture.nativeElement.querySelector(
        '[data-test="ion_card_head_icon"]',
      );
      const progressBar: IonProgressBar[] =
        fixture.nativeElement.querySelectorAll(
          '[data-test="ion_card_head_progress_bar"]',
        );

      expect(elementIcon).toBeNull();
      expect(elementPower).toBeNull();
      expect(elementTitle).toBeNull();

      expect(progressBar).toBeTruthy();
      expect(progressBar.length).toEqual(2);
    });

    it('should have called the emit method', () => {
      const elementCard = fixture.nativeElement.querySelector(
        '[data-test="ion_card"]',
      );
      const emitSpy = spyOn(component.cardClick, 'emit');
      elementCard.click(); // simulate a click event
      expect(emitSpy).toHaveBeenCalledTimes(1);
    });
  });
});
