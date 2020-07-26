import { ThemeService } from './../../Services/theme.service';
import { IPage, AppPages } from './../../Models/General';
import { Component } from '@angular/core';
import { PageService } from 'src/app/Services/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavPanelComponent {
  public pages: IPage[] = AppPages;
  public open = false;
  public selectedPage: IPage = null;
  constructor(private route: Router, private themeService: ThemeService, public pageService: PageService) {
    this.selectedPage = pageService.selectedPage;
  }

  toggleNav(): void {
    this.open = !this.open;
  }

  selectPage(page: IPage): void {
    if (this.selectedPage && page.url === this.selectedPage.url) { return; }
    this.pageService.setPage(page);
    this.selectedPage = page;
  }

}
