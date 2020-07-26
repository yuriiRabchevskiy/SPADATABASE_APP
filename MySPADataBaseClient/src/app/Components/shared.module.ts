import { HeaderComponent } from './Header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './Icon/icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, IconComponent],
  declarations: [HeaderComponent, IconComponent],
  providers: []
})
export class SharedModule {}
