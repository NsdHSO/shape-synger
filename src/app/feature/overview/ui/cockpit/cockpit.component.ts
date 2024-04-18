import { Component } from '@angular/core';

import { CardComponent } from '../../../../ui/card/card.component';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss'],
  standalone: true,
  imports: [CardComponent],
})
export class CockpitComponent {}
