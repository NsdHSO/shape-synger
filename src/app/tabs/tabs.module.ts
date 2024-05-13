import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { NakedPipe } from '../core/pipes/naked.pipe';
import { authInterceptor } from '../core/auth/auth.interceptor';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    NakedPipe,
    TabsPage,
  ],
  providers: [provideHttpClient(withInterceptors([authInterceptor]))],
})
export class TabsPageModule {
}
