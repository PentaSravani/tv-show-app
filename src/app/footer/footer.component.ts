import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '../tv-show-constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public copyright: string = CONSTANTS.copyright;
  public tvMazeUrl: string = CONSTANTS.tvMazeUrl;
  constructor() { }

  ngOnInit(): void {
  }

}
