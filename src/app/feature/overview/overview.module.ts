import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { OverviewComponent } from './overview.component';
import { HeaderOverviewComponent } from './ui/header-overview/header-overview.component';
import { CockpitComponent } from './ui/cockpit/cockpit.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { CardComponent } from '../../ui/card/card.component';
import { OverviewApiService } from './services/api/overview-api.service';
import { environment } from '../../../environments/environment';

export const API_URL = new InjectionToken('ENV');

@NgModule({
  imports: [
    CommonModule,
    OverviewRoutingModule,
    IonicModule,
    HeaderOverviewComponent,
    CardComponent,
    OverviewComponent,
    CockpitComponent,
  ],
  providers: [
    OverviewApiService,
    {
      provide: API_URL,
      useValue: environment.apiOverViewUrl,
    },
  ],
})
export class OverviewModule {}
