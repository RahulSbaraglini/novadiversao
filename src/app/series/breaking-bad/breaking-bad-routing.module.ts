import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreakingBadPage } from './breaking-bad.page';

const routes: Routes = [
  {
    path: '',
    component: BreakingBadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreakingBadPageRoutingModule {}
