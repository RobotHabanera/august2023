import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePromotionComponent } from '../2-single-promotion/_single-promotion/single-promotion/single-promotion.component';
import { TableComponent } from './_table/table.component';
import { SinglePromotionModule } from '../2-single-promotion/_single-promotion/single-promotion.module';
import { PromotionsGridModule } from './promotions-grid.module';


const routes: Routes = [
  {
    path: '',
    component: TableComponent,
  },
  { path: 'edit',
    component: SinglePromotionComponent,
    pathMatch: 'full'
  },
  {
    path: 'delete',
    component: SinglePromotionComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SinglePromotionModule,
    PromotionsGridModule],
  exports: [RouterModule]
})
export class PromotionsGridRoutingModule { }
