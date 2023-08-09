import { Component } from '@angular/core';
import { StepActivationService } from 'src/app/services/step-activation.service';

@Component({
  selector: 'app-single-promotion',
  templateUrl: './single-promotion.component.html',
  styleUrls: ['./single-promotion.component.scss'],
  host: { class: 'promo-column w-1/4 px-2 py-2'}
})
export class SinglePromotionComponent {

  isDisabled: boolean = true;

  constructor(
    public stepActivationS: StepActivationService
  ) {}
}
