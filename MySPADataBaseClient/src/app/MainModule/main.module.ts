import { NavPanelComponent } from './NavPanel/nav.component';
import { NavItemComponent } from './NavPanel/NavItemComponent/nav-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../Components/shared.module';
import { MainComponent } from './main.component';

const routes: Routes = [{
  path: '', component: MainComponent,
  children: [
      { path: 'home', loadChildren: () => import('./../HomeModule/home.module').then(m => m.HomeModule) },
      { path: 'reports', loadChildren: () => import('./../ReportModule/report.module').then(m => m.ReportModule) },
      { path: 'settings', loadChildren: () => import('./../SettingsModule/settings.module').then(m => m.SettingsModule) },
      // Unexpected URL handling.
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
  ]
}];
@NgModule({
  declarations: [MainComponent, NavPanelComponent, NavItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: []
})

export class MainModule { }
