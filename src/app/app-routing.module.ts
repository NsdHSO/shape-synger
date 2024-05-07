import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { RoutingSateService } from './core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
    data: {
      routes: [
        {
          title:
            RoutingSateService.paths.overview[0].toUpperCase() +
            RoutingSateService.paths.overview.slice(1),
          href:
            RoutingSateService.paths.tabs +
            '/' +
            RoutingSateService.paths.overview,
        },
      ],
    },
  },
  {
    path: RoutingSateService.paths.login,
    loadChildren: () =>
      import('./feature/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
