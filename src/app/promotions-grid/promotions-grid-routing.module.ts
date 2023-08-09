import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePromotionComponent } from '../single-promotion/single-promotion/single-promotion/single-promotion.component';
import { TableComponent } from './table/table.component';
import { SinglePromotionModule } from '../single-promotion/single-promotion/single-promotion.module';
import { PromotionsGridModule } from './promotions-grid.module';


const routes: Routes = [
  {
    path: '',
    component: TableComponent,
  },
  { path: 'edit',
    component: SinglePromotionComponent,
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
    PromotionsGridModule
  ],
  exports: [RouterModule]
})
export class PromotionsGridRoutingModule { }
