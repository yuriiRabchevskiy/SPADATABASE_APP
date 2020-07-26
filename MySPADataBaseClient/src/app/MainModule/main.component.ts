import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../Services/page.service';
import { AppPages, IPage } from '../Models/General';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private route: Router, public pageService: PageService) {
    const rout = this.route.url;
    const page: IPage = AppPages.find(it => rout.indexOf(it.url) !== -1);
    this.pageService.setPage(page);
  }

  ngOnInit(): void {}

}
