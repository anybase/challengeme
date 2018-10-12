import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ChallengeComponent, ChallengeDetailComponent,PostComponent, PostEditorComponent, TimelineComponent, CalendarSliderComponent, ChallengeSummaryComponent } from '@app/shared';
import {GroupByPipe} from '@app/shared'
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
    TimelineComponent, 
    ChallengeComponent, 
    ChallengeDetailComponent, 
    PostComponent,
    PostEditorComponent,
    CalendarSliderComponent,
    ChallengeSummaryComponent,
    GroupByPipe ],
  providers: [
    
  ]
})
export class DashboardModule { }
