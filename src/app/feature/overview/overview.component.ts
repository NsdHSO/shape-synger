import { Component, inject } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { AsyncPipe, JsonPipe } from '@angular/common';

import { ActivatedRoute } from '@angular/router';

import { CockpitComponent } from './ui/cockpit/cockpit.component';
import { HeaderOverviewComponent } from './ui/header-overview/header-overview.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    HeaderOverviewComponent,
    CockpitComponent,
    JsonPipe,
    AsyncPipe,
  ],
})
export class OverviewComponent {
  //Cot

  supabaseService = inject(ActivatedRoute);
}
