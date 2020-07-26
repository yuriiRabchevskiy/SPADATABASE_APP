import { Component } from '@angular/core';
import { PageService } from 'src/app/Services/page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  constructor(private pageService: PageService) {}

  get SelectedPage(): string {
    return this.pageService.selectedPage ? this.pageService.selectedPage.titleKey : null;
  }
}
