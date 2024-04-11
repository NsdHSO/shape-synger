import { Component, computed, inject, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-overview',
  templateUrl: './header-overview.component.html',
  styleUrls: ['./header-overview.component.scss'],
  standalone: true,
  imports: [IonicModule, TranslateModule],
})
export class HeaderOverviewComponent {
  /**
   * Translate Instance
   */
  translateService = inject(TranslateService);
  language = signal('EN');
  languageComputed = computed(() => {
    if (this.language() === 'RO') {
      this.translateService.use('en-EN');
      return 'EN';
    } else {
      this.translateService.use('ro-RO');
      return 'RO';
    }
  });

  languageChange() {
    this.language.update((value) => (value === 'RO' ? 'EN' : 'RO'));
  }
}
