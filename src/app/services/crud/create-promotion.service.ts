import { Injectable } from '@angular/core';
import { DraftService } from '../draft.service';
// Enums
import { StepsEnum } from 'src/app/enums/steps.enum';

@Injectable()


export class CreatePromotionService {


  stepsEnum = StepsEnum;

  constructor() {
    console.log(StepsEnum.Definition);
   }


   // To jest URL do Firebase Database -> https://promotions-58746-default-rtdb.firebaseio.com/


  create(draft:DraftService) {
    // 1. pobiera informacje z localstorage
    var keys = Object.keys(this.stepsEnum);
    keys.forEach((obj, index) => {
      console.log(obj);
    });
    // for (let item in StepsEnum) {
      // let mega = draft.getLocalStorageData(item);

      // 2. zapisujemy informacje na firebase
    }


    // 3. jesli zapisalo to czyścić draft
    // 4. redirect do strony z listą


}
