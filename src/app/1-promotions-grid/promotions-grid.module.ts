import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './_table/table.component';
import { EditBtnModule } from './edit-btn/edit-btn.module';
import { DeleteBtnModule } from './delete-btn/delete-btn.module';
import { SinglePromotionModule } from '../2-single-promotion/_single-promotion/single-promotion.module';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    SinglePromotionModule,
    EditBtnModule,
    DeleteBtnModule,
  ],
  exports: [
    TableComponent
  ]
})
export class PromotionsGridModule { }
