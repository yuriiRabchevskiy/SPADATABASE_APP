import { SettingsRoutingModule } from './settings.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Components/shared.module';
import { SettingsComponent } from './Settings/settings.component';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
  ],
  providers: []
})

export class SettingsModule { }
