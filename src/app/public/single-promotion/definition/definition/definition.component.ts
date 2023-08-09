import { Component } from '@angular/core';
import { StepActivationService } from 'src/app/services/step-activation.service';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss'],
  host: { class: 'flex gap-1 h-full'}
})
export class DefinitionComponent {

  constructor(
    public stepActivationS: StepActivationService
  ) {}

  onChange(event:any) {
    this.stepActivationS.text = event.target.value;
  }
}
