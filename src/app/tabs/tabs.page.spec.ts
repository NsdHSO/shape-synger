import { CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';

import { TabsPage } from './tabs.page';
import { CoreService } from '../core/core.service';

describe('TabsPage', () => {
  describe('Init Value', () => {
    let component: TabsPage;
    let fixture: ComponentFixture<TabsPage>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [TabsPage],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: {
                data: {
                  routes: [],
                },
              },
            },
          },
          {
            provide: CoreService,
            useValue: {
              baseApp: signal('ion'),
            },
          },
        ],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(TabsPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it('should assert the ui', () => {
      const element = fixture.nativeElement.querySelector(
        '[data-test="ion_tabs_0"]',
      );
      expect(element).not.toBeTruthy();
    });
  });
  describe('Change Value', () => {
    let component: TabsPage;
    let fixture: ComponentFixture<TabsPage>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [TabsPage],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: {
                data: {
                  routes: [{}, {}],
                },
              },
            },
          },
        ],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(TabsPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it('should assert the ui', () => {
      const element = fixture.nativeElement.querySelector(
        '[data-test="ion_tabs_1"]',
      );
      expect(element).toBeTruthy();
    });
  });
});
