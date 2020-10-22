import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetTvShowsService } from '../tv-service/get-tv-shows.service';
import { ITvShow } from '../i-tv-show';
import { CONSTANTS } from '../tv-show-constants';

@Component({
  selector: 'app-tv-show-search',
  templateUrl: './tv-show-search.component.html',
  styleUrls: ['./tv-show-search.component.css']
})
export class TvShowSearchComponent implements OnInit {
  public errorMessage: string;
  public title: string = CONSTANTS.searchTitle;
  public message: string = CONSTANTS.searchMessage;
  public back: string = CONSTANTS.back;
  public rating: string = CONSTANTS.rating;
  public noRating: string = CONSTANTS.noRating;

  public searchResult: ITvShow[];
  constructor(private router: Router, private route: ActivatedRoute, private getTvShow: GetTvShowsService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    const searchString = this.route.snapshot.paramMap.get('searchString');
    this.getTvShow.getShowSearch(searchString).subscribe(
      (data) => {
        this.searchResult = this.getShowArray(data);
      },
      error => {
        this.errorMessage = error;
      });
  }

  getShowArray(data): ITvShow[] {
    const arr = [];
    Object.keys(data).map(key => {
      arr.push(data[key]);
    });
    return arr;
  }

  goBack(): void {
    this.getTvShow.goBack();
  }

}
