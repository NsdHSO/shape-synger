// This file is required by karma.conf.js and loads recursively all the .spec and framework files
// eslint-disable-next-line boundaries/no-unknown-files
import 'zone.js/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

import { signal } from '@angular/core';

import { NakedPipe } from './app/core/pipes/naked.pipe';
import { CoreService } from './app/core/core.service';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);
// Setup function to configure TestBed with necessary providers and imports
function configureTestingModule() {
  TestBed.configureTestingModule({
    imports: [NakedPipe],
    providers: [
      {
        provide: CoreService,
        useValue: {
          baseApp: signal('ion'),
        },
      },
    ],
  });
}

// Call the setup function before each test case
beforeEach(() => {
  configureTestingModule();
});
