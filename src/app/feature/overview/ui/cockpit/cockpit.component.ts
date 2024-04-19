import { Component, Input } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { CardComponent } from '../../../../ui/card/card.component';
import { Card } from '../../type/overview.type';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss'],
  standalone: true,
  imports: [CardComponent, IonicModule, TranslateModule],
})
export class CockpitComponent {
  @Input() cards!: { title: string; cards: Card[] }[];
}
