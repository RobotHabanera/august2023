import { Directive, ElementRef, HostListener } from '@angular/core';
import { CurrentPromotionPageNotificationService } from '../services/current-promotion-page-notification.service';


@Directive({
  selector: '[setCurrentPage]'
})
export class SetCurrentPageDirective {


  constructor(
    private elRef: ElementRef,
    private currentPageNotificationS: CurrentPromotionPageNotificationService
  ) { }

  @HostListener('click')
  getPage() {
    const selectedData = this.elRef.nativeElement.getAttribute('data-id');
    console.log(selectedData);
    this.currentPageNotificationS.sendPageNotification(selectedData);
  }



}
