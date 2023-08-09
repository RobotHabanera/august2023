import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { EditBtnModule } from './edit-btn/edit-btn.module';
import { DeleteBtnModule } from './delete-btn/delete-btn.module';
import { SinglePromotionModule } from '../single-promotion/single-promotion.module';



@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    SinglePromotionModule,
    EditBtnModule,
    DeleteBtnModule,
  ],
  exports: [
    TableComponent
  ]
})
export class PromotionsGridModule { }
