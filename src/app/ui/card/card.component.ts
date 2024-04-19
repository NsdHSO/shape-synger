import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

// eslint-disable-next-line boundaries/element-types
import { TranslateModule } from '@ngx-translate/core';

import { NakedPipe } from '../../core/pipes/naked.pipe';
import { BorderColoredDirective } from '../directive/border-colored.directive';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [IonicModule, NakedPipe, TranslateModule],
  hostDirectives: [{ directive: BorderColoredDirective, inputs: ['color'] }],
})
export class CardComponent {
  /**
   * Title card
   */
  @Input() title!: string;

  /**
   * Super Script in head section
   */
  @Input()
  superScript!: string;

  /**
   * Icon for head section
   */
  @Input()
  logo!: string;

  /**
   * Sub title for every each item
   */
  @Input()
  subTitle!: string;
}
