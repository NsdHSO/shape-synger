import { makeEnvironmentProviders, Provider, signal } from '@angular/core';

import { CoreService } from './core.service';

export function provideCore(baseName: string) {
  const providers: Provider[] = [
    {
      provide: CoreService,
      useValue: {
        baseApp: signal(baseName),
      },
    },
  ];

  return makeEnvironmentProviders(providers);
}
