import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONSTANTS } from '../tv-show-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public searchShow: string;
  public home: string = CONSTANTS.home;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSearch(form): void {
    this.route.navigate(['/search/', form.value.searchShow]);
  }
}
