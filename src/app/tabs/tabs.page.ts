import { Component, inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { RoutingSateService } from '../core/routing/routing-sate.service';
import { NakedPipe } from '../core/pipes/naked.pipe';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss'],
    standalone: true,
    imports: [IonicModule, NakedPipe],
})
export class TabsPage {
  protected readonly activatedRoute = inject(ActivatedRoute);
  protected readonly RoutingSateService = RoutingSateService;
}
