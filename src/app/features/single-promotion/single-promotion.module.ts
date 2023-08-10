import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePromotionComponent } from './single-promotion/single-promotion.component';
import { DefinitionModule } from './definition/definition.module';
import { ChooseProductsModule } from './choose-products/choose-products.module';
import { SetCurrentStepDirective } from 'src/app/directives/set-current-step.directive';
import { ExcludeProductsModule } from './exclude-products/exclude-products.module';
import { BonusProductsModule } from './bonus-products/bonus-products.module';
import { ProductsLimitsModule } from './products-limits/products-limits.module';
import { ChooseClientsModule } from './choose-clients/choose-clients.module';
import { ExcludeClientsModule } from './exclude-clients/exclude-clients.module';
import { ClientsLimitsModule } from './clients-limits/clients-limits.module';
import { SummaryModule } from './summary/summary.module';
import { BackButtonDirective } from 'src/app/directives/go-back.directive';





@NgModule({
  declarations: [
    SinglePromotionComponent,
    SetCurrentStepDirective,
    BackButtonDirective
  ],
  imports: [
    CommonModule,
    DefinitionModule,
    ChooseProductsModule,
    ExcludeProductsModule,
    BonusProductsModule,
    ProductsLimitsModule,
    ChooseClientsModule,
    ExcludeClientsModule,
    ClientsLimitsModule,
    SummaryModule
  ],
  exports: [
    SinglePromotionComponent,
  ]
})
export class SinglePromotionModule { }
