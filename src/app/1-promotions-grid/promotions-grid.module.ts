import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './_table/table.component';
import { EditBtnModule } from './edit-btn/edit-btn.module';
import { DeleteBtnModule } from './delete-btn/delete-btn.module';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    EditBtnModule,
    DeleteBtnModule
  ],
  exports: [
    TableComponent
  ]
})
export class PromotionsGridModule { }
