import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentPromotionPageNotificationService } from 'src/app/services/current-promotion-page-notification.service';
import { StepActivationService } from 'src/app/services/step-activation.service';

@Component({
  selector: 'app-single-promotion',
  templateUrl: './single-promotion.component.html',
  providers: [
    StepActivationService,
    CurrentPromotionPageNotificationService
  ],
  styleUrls: ['./single-promotion.component.scss']
})
export class SinglePromotionComponent implements OnInit {

  isDisabled: boolean = true;
  currentPageSubscription!: Subscription;
  currentPage!: string;


  constructor(
    public stepActivationS: StepActivationService,
    private currentPageNotificationS: CurrentPromotionPageNotificationService
  ) {}

  ngOnInit():void {
    // Subscribe to Filter Button Event
    this.currentPageSubscription = this.currentPageNotificationS.currentPage.subscribe(d => {
      this.currentPage = d;
    });
  }

  ngAfterViewChecked():void {
    console.log(this.currentPage);
  }


}
