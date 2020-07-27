import { HomeRoutingModule } from './home.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Components/shared.module';
import { HomeComponent } from './Home/home.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: []
})

export class HomeModule { }
