import { Component, inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { RoutingSateService } from '../core/routing/routing-sate.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  protected readonly activatedRoute = inject(ActivatedRoute);
  protected readonly RoutingSateService = RoutingSateService;
}
