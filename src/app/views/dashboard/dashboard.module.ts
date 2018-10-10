import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ChallengeComponent, ChallengeDetailComponent,PostComponent, PostEditorComponent, HorizontalTimelineComponent, CalendarSliderComponent, ChallengeSummaryComponent } from '@app/shared';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    DateInputsModule,
    InputsModule,
    CommonModule
    
  ],
  declarations: [ 
    DashboardComponent,
    HorizontalTimelineComponent, 
    ChallengeComponent, 
    ChallengeDetailComponent, 
    PostComponent,
    PostEditorComponent,
    CalendarSliderComponent,
    ChallengeSummaryComponent ]
})
export class DashboardModule { }
