import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  onSearch(form: FormGroup): void {
    this.route.navigate(['/search/', form.value.searchShow]);
  }
}
