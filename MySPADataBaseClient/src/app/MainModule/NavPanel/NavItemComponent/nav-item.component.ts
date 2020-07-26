import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPage } from 'src/app/Models/General';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})

export class NavItemComponent {
  @Input() page: IPage;

  @Input() selected = false;

  @Output() iClick: EventEmitter<any> = new EventEmitter<any>();

  onClick(event: any): void {
    if (this.selected) { return; }
    this.iClick.emit(event);
  }
}
