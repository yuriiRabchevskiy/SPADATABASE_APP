import { ReportRoutingModule } from './report.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Components/shared.module';
import { ReportComponent } from './Report/report.component';

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    SharedModule,
  ],
  providers: []
})

export class ReportModule { }
