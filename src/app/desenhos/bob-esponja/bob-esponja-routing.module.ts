import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BobEsponjaPage } from './bob-esponja.page';

const routes: Routes = [
  {
    path: '',
    component: BobEsponjaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BobEsponjaPageRoutingModule {}
