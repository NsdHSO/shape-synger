import { TestBed } from '@angular/core/testing';

import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

import { ToastController } from '@ionic/angular/standalone';

import { Location } from '@angular/common';

import { CockpitService } from './cockpit.service';

@Component({
  selector: 'test-cockpit-service',
  template: 'hello',
  standalone: true,
})
export class CockpitComponent {}

describe('CockpitService', () => {
  describe('Init Value', () => {
    let service: CockpitService;
    let translate;
    let navController: { navigateRoot: any };
    let location: any;
    let toastController: { create: any };
    beforeEach(() => {
      translate = jasmine.createSpyObj('TranslateService', {
        instant: of(''),
      });
      toastController = jasmine.createSpyObj('ToastController', {
        crate: () => Promise.resolve(() => ({ present: () => ({}) })),
      });
      navController = jasmine.createSpyObj('NavController', {
        navigateRoot: Promise.reject({ code: 4002 }),
      });
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes([
            { path: 'tate', component: CockpitComponent },
          ]),
        ],
        providers: [
          CockpitService,
          { provide: TranslateService, useValue: translate },
          { provide: ActivatedRoute, useValue: {} },
          { provide: NavController, useValue: navController },
          { provide: ToastController, useValue: toastController },
          Location,
        ],
      });
      service = TestBed.inject(CockpitService);
      location = TestBed.inject(Location);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should not get ', async () => {
      service.navigateTo('tate');
      expect(navController.navigateRoot).toHaveBeenCalledTimes(1);
    });
  });

  describe('Change value', () => {
    let service: CockpitService;
    let translate;
    let navController: { navigateRoot: any };
    let toastController: { create: any };
    beforeEach(() => {
      translate = jasmine.createSpyObj('TranslateService', {
        instant: of(''),
      });
      navController = jasmine.createSpyObj('NavController', {
        navigateRoot: Promise.reject({ code: 4002 }),
      });
      toastController = jasmine.createSpyObj('ToastController', {
        create: (options: any) =>
          Promise.resolve({
            present: () => {},
          }),
      });
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes([
            { path: 'tate', component: CockpitComponent },
          ]),
        ],
        providers: [
          CockpitService,
          { provide: TranslateService, useValue: translate },
          { provide: ActivatedRoute, useValue: {} },
          { provide: NavController, useValue: navController },
          { provide: ToastController, useValue: toastController },
        ],
      });
      service = TestBed.inject(CockpitService);
    });

    it('should display error toast when navigation fails', async () => {
      await service.navigateTo('tate');
      expect(toastController.create).toHaveBeenCalledTimes(1);
    });
  });
});
