import { Component } from '@angular/core';
import { RoutingSateService } from '../core/routing/routing-sate.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor() {}

  protected readonly RoutingSateService = RoutingSateService;
}
