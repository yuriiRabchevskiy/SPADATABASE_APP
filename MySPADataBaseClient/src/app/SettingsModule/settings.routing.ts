import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './Settings/settings.component';


const routes: Routes = [
  { path: '', redirectTo: 'main' },
  { path: 'main',  component: SettingsComponent },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
