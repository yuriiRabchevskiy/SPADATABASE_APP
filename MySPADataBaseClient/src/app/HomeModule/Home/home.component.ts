import { IProduct } from './../../Models/General';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  products: IProduct[] = [];
  displayedColumns: string[] = ['name', 'category', 'color', 'code', 'quantity', 'price'];
  expandedElement: IProduct | null;
  dataSource = new MatTableDataSource(this.products);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getData(): void {
    this.http.get('https://localhost:44374/api/product').subscribe((res: any) => {
      this.products = res;
      this.dataSource.data = res;
    }, err => console.log(err));
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
