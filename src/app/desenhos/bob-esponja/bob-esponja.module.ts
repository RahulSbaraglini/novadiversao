import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BobEsponjaPageRoutingModule } from './bob-esponja-routing.module';

import { BobEsponjaPage } from './bob-esponja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BobEsponjaPageRoutingModule
  ],
  declarations: [BobEsponjaPage]
})
export class BobEsponjaPageModule {}
