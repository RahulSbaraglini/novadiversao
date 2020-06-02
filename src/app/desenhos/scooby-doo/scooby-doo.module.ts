import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoobyDooPageRoutingModule } from './scooby-doo-routing.module';

import { ScoobyDooPage } from './scooby-doo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScoobyDooPageRoutingModule
  ],
  declarations: [ScoobyDooPage]
})
export class ScoobyDooPageModule {}
