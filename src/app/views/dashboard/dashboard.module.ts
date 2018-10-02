import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { HorizontalTimelineComponent } from '../horizontal-timeline/horizontal-timeline.component';
import {ChallengeComponent} from '../challenge/challenge.component';
import {ChallengeDetailComponent} from '../challenge-detail/challenge-detail.component';
import {PostComponent} from '../post/post.component'
import { PostEditorComponent } from '../post-editor/post-editor.component';
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
    PostEditorComponent ]
})
export class DashboardModule { }
