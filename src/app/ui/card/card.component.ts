import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

// eslint-disable-next-line boundaries/element-types
import { NakedPipe } from '../../core/pipes/naked.pipe';
import { BorderColoredDirective } from '../directive/border-colored.directive';
import { TranslateModule } from '@ngx-translate/core';

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
