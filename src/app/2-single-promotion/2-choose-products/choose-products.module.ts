import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseProductsComponent } from './choose-products/choose-products.component';



@NgModule({
  declarations: [
    ChooseProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChooseProductsComponent
  ]
})
export class ChooseProductsModule { }
