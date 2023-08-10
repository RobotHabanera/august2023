import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// Enums
import { StepsEnum } from '../enums/steps.enum';

@Injectable()

export class CurrentPromotionPageNotificationService {


  constructor() { }

  // Change Category Value Notification
  public currentPageSubject: BehaviorSubject<string | any> = new BehaviorSubject(StepsEnum.Definition);
  currentPage$ = this.currentPageSubject.asObservable();

  sendPageNotification(data:any) {
    this.currentPageSubject.next(data);
  }


}
