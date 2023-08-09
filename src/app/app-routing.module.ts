import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./promotions-grid/promotions-grid-routing.module').then(m => m.PromotionsGridRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {


}
