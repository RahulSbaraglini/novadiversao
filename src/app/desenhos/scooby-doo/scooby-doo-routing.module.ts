import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoobyDooPage } from './scooby-doo.page';

const routes: Routes = [
  {
    path: '',
    component: ScoobyDooPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScoobyDooPageRoutingModule {}
