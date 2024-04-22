import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview.component';
import { OverviewApiService } from './services/api/overview-api.service';
import { RoutingSateService } from '../../core';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    resolve: {
      cards: () => inject(OverviewApiService).getCards,
    },
  },
  {
    path: RoutingSateService.paths.traning,
    loadComponent: () =>
      import('./ui/traning/traning.component').then((c) => c.TraningComponent),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class OverviewRoutingModule {
}
