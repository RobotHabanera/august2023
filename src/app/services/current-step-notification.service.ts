import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// Enums
import { StepsEnum } from '../enums/steps.enum';

@Injectable()

export class CurrentStepNotificationService {


  constructor() { }

  // Change Category Value Notification
  public currentStepSubject: BehaviorSubject<string | any> = new BehaviorSubject(StepsEnum.Definition);
  currentStep$ = this.currentStepSubject.asObservable();

  sendStepNotification(data:any) {
    this.currentStepSubject.next(data);
  }


}
