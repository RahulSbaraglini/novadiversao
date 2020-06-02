import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreakingBadPageRoutingModule } from './breaking-bad-routing.module';

import { BreakingBadPage } from './breaking-bad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreakingBadPageRoutingModule
  ],
  declarations: [BreakingBadPage]
})
export class BreakingBadPageModule {}
