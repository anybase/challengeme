import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    DateInputsModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
