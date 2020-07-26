import { IPage } from './../Models/General';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  selectedPage: IPage = null;

  selectedPageChange: Subject<IPage> = new Subject<IPage>();

  constructor() {
    this.selectedPageChange.subscribe((value) => {
      this.selectedPage = value;
    });
  }

  setPage(page: IPage): void {
    this.selectedPageChange.next(page);
  }

}
