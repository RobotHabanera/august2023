import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class CurrentPromotionPageNotificationService {


  constructor() { }

  // Change Category Value Notification
  public currentPageSubject: BehaviorSubject<string> = new BehaviorSubject('definition');
  currentPage$ = this.currentPageSubject.asObservable();

  sendPageNotification(data:any) {
    this.currentPageSubject.next(data);
  }


}
