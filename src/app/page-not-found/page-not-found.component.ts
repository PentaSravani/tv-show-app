import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '../tv-show-constants';
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  public backToHome: string = CONSTANTS.backToHome;
  public pageNotFoundMessage1: string = CONSTANTS.pageNotFoundMessage1;
  public pageNotFoundMessage2: string = CONSTANTS.pageNotFoundMessage2;
  public pageNotFoundMessage3: string = CONSTANTS.pageNotFoundMessage3;
  constructor() { }

  ngOnInit(): void {
  }

}
