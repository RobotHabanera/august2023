import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePromotionComponent } from '../2-single-promotion/_single-promotion/single-promotion/single-promotion.component';
import { TableComponent } from './_table/table.component';


const routes: Routes = [
  {
    path: '',
    component: TableComponent,
  },
  { path: 'edit', component: SinglePromotionComponent },
  {
    path: 'delete',
    component: SinglePromotionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionsGridRoutingModule { }
