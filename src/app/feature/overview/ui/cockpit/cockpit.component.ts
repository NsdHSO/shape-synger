import { Component, inject, Input } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';

import { CardComponent } from '../../../../ui/card/card.component';
import { Card } from '../../type/overview.type';
import { CockpitService } from '../../services/logic/cockpit/cockpit.service';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss'],
  standalone: true,
  imports: [CardComponent, IonicModule, TranslateModule],
  providers: [CockpitService],
})
export class CockpitComponent {
  /**
   * Cards Array
   */
  @Input() cards!: { title: string; cards: Card[] }[];

  /**
   * Instance of cockpit Service
   */
  cockpitService = inject(CockpitService);
}
