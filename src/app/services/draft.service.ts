import { Injectable } from '@angular/core';

@Injectable()


export class DraftService {

  constructor() { }

  // Save Draft
  saveDraft(stepName:string, value:JSON) {
    localStorage.setItem(stepName, JSON.stringify(value));
  }


  // Get Data from the localstorage
  getLocalStorageData(stepName:string) {
    return localStorage.getItem(stepName);
  }

}
