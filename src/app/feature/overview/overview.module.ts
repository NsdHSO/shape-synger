import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { IonicModule } from '@ionic/angular';
import { HeaderOverviewComponent } from './components/header-overview/header-overview.component';
import { CockpitComponent } from './components/cockpit/cockpit.component';
import { OverviewRoutingModule } from './overview-routing.module';

@NgModule({
  declarations: [OverviewComponent, CockpitComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    IonicModule,
    HeaderOverviewComponent,
  ],
})
export class OverviewModule {}
