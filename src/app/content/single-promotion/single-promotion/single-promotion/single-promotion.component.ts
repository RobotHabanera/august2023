import { Component } from '@angular/core';
import { StepActivationService } from 'src/app/services/step-activation.service';

@Component({
  selector: 'app-single-promotion',
  templateUrl: './single-promotion.component.html',
  providers: [StepActivationService],
  styleUrls: ['./single-promotion.component.scss']
})
export class SinglePromotionComponent {

  isDisabled: boolean = true;

  constructor(
    public stepActivationS: StepActivationService
  ) {}
}
