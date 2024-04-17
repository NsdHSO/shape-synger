import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import {NakedPipe} from "../core/pipes/naked.pipe";

@NgModule({
    imports: [IonicModule, CommonModule, FormsModule, TabsPageRoutingModule, NakedPipe, TabsPage],
})
export class TabsPageModule {}
