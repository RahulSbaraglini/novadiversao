import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ad-astra',
    loadChildren: () => import('./filmes/ad-astra/ad-astra.module').then( m => m.AdAstraPageModule)
  },
  {
    path: 'resgate',
    loadChildren: () => import('./filmes/resgate/resgate.module').then( m => m.ResgatePageModule)
  },
  {
    path: 'flash',
    loadChildren: () => import('./series/flash/flash.module').then( m => m.FlashPageModule)
  },
  {
    path: 'bob-esponja',
    loadChildren: () => import('./desenhos/bob-esponja/bob-esponja.module').then( m => m.BobEsponjaPageModule)
  },
  {
    path: 'scooby-doo',
    loadChildren: () => import('./desenhos/scooby-doo/scooby-doo.module').then( m => m.ScoobyDooPageModule)
  },
  {
    path: 'breaking-bad',
    loadChildren: () => import('./series/breaking-bad/breaking-bad.module').then( m => m.BreakingBadPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
