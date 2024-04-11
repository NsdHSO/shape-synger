import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { RoutingSateService } from '../shared/services';

const routes: Routes = [
  {
    path: RoutingSateService.paths.tabs,
    component: TabsPage,
    children: [
      {
        path: RoutingSateService.paths.overview,
        loadChildren: () =>
          import('../modules/overview/overview.module').then(
            (m) => m.OverviewModule,
          ),
      },
      {
        path: '',
        redirectTo: `${RoutingSateService.paths.overview}`,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: `${RoutingSateService.paths.tabs}`,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
