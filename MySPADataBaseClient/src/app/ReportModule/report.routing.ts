import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './Report/report.component';


const routes: Routes = [
  { path: '', redirectTo: 'main' },
  { path: 'main',  component: ReportComponent },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
