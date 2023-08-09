import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
// Single Promotion
import { SinglePromotionModule } from './2-single-promotion/_single-promotion/single-promotion.module';
import { DefinitionModule } from './2-single-promotion/1-definition/definition.module';
import { PromotionsGridModule } from './1-promotions-grid/promotions-grid.module';
import { PromotionsGridRoutingModule } from './1-promotions-grid/promotions-grid-routing.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    // Promotions Grid
    PromotionsGridModule,
    PromotionsGridRoutingModule,
    // Single Promotion
    SinglePromotionModule,
    DefinitionModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
