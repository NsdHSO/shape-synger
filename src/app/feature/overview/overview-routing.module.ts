import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview.component';
import { OverviewApiService } from './services/api/overview-api.service';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    resolve: {
      cards: () => inject(OverviewApiService).getCards,
    },
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
export class OverviewRoutingModule {}
