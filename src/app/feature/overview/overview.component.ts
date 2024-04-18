import { Component } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { CockpitComponent } from './ui/cockpit/cockpit.component';
import { HeaderOverviewComponent } from './ui/header-overview/header-overview.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  standalone: true,
  imports: [IonicModule, HeaderOverviewComponent, CockpitComponent],
})
export class OverviewComponent {
  //Cot
}
