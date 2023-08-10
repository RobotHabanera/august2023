import { Component } from '@angular/core';
// Services
import { DraftService } from 'src/app/services/draft.service';
import { CreatePromotionService } from 'src/app/services/crud/create-promotion.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  providers: [
    DraftService,
    CreatePromotionService
  ],
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

  constructor(
    private createPromotionS: CreatePromotionService,
    private draftS: DraftService
  ) {}


  // Save Data
  save() {
    this.createPromotionS.create(this.draftS);
  }


}
