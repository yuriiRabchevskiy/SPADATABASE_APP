import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent {
  @Input() color = 'var(--background-default)';
  @Input() icon: string;
  public _width = '100%';
  @Input() set width(val: string) {
    if (!val) { return; }
    this._width = `${val}px`;
  }
  get width(): string {
    return this._width;
  }
  public _height = '100%';
  @Input() set height(val: string) {
    if (!val) { return; }
    this._height = `${val}px`;
  }
  get height(): string {
    return this._height;
  }
}
