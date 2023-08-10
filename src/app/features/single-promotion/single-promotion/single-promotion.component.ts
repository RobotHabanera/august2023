import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentStepNotificationService } from 'src/app/services/current-step-notification.service';
import { StepActivationService } from 'src/app/services/step-activation.service';

@Component({
  selector: 'app-single-promotion',
  templateUrl: './single-promotion.component.html',
  providers: [
    StepActivationService,
    CurrentStepNotificationService
  ],
  styleUrls: ['./single-promotion.component.scss']
})

export class SinglePromotionComponent implements OnInit {

  isDisabled: boolean = true;
  currentStepSubscription!: Subscription;
  currentStep!: string;


  constructor(
    public stepActivationS: StepActivationService,
    private currentStepNotificationS: CurrentStepNotificationService
  ) {}

  ngOnInit():void {
    // Subscribe to Filter Button Event
    this.currentStepSubscription = this.currentStepNotificationS.currentStep$.subscribe(d => {
      this.currentStep = d;
    });
  }



}
