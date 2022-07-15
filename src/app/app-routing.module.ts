import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'enrolled',
    loadChildren: () => import('./pages/enrolled/enrolled.module').then( m => m.EnrolledModule),
    pathMatch: 'full'
  },
  {
    path: 'unrolled',
    loadChildren: () => import('./pages/unrolled/unrolled.module').then( m => m.UnrolledModule)
  },
  {
    path: '',
    redirectTo: 'enrolled',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
