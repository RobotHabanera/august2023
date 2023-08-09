import { Component } from '@angular/core';
import { StepActivationService } from 'src/app/services/step-activation.service';

@Component({
  selector: 'app-definition-page',
  templateUrl: './definition-page.component.html',
  styleUrls: ['./definition-page.component.scss'],
  host: { class: 'w-3/4 flex gap-1 '}
})
export class DefinitionPageComponent {

  constructor(
    public stepActivationS: StepActivationService
  ) {}

  onChange(event:any) {
    this.stepActivationS.text = event.target.value;
  }
}
