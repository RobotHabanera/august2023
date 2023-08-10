import { Injectable } from '@angular/core';

@Injectable()


export class DraftService {

  constructor() { }

  // Save Draft
  saveDraft(pageName:string, value:JSON) {
    localStorage.setItem(pageName, JSON.stringify(value));
  }


  // Get Data from the localstorage
  getLocalStorageData(pageName:string) {
    return localStorage.getItem(pageName);
  }

}
