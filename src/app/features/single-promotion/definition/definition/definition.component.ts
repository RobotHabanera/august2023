import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DraftService } from 'src/app/services/draft.service';
import { StepActivationService } from 'src/app/services/step-activation.service';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss'],
  providers: [ DraftService ]
})
export class DefinitionComponent implements OnInit {

  definitionForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private draftS: DraftService,
    public stepActivationS: StepActivationService,
  ) {}

  ngOnInit():void {
    this.definitionForm = this.fb.group({
      marketing_name: ['', Validators.required],
      technical_name: ['', Validators.required],
      description: ['', Validators.required],
      portal: ['', Validators.required],
      type: ['', Validators.required],
      start_date: ['', Validators.required],
      finish_date: ['', Validators.required],
    });
    // Set Initial data if that data exists
    this.fillForm('definition');
    // Listen to Form Value Changes to set new Values inside form
    this.definitionForm.valueChanges.subscribe(value => {
      this.draftS.saveDraft('definition',value);
    });
  }

  onChange(event:any) {
    this.stepActivationS.text = event.target.value;
  }


  fillForm(pageName:string) {
    const localStorageData = this.draftS.getLocalStorageData(pageName);
    // check if data from localstorage exists
    if (localStorageData !== null) {
      // if data does exist, use that data to setValue on the form
      this.definitionForm.setValue(JSON.parse(localStorageData));
    }
  }



}