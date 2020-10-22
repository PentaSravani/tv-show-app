import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetTvShowsService } from '../tv-service/get-tv-shows.service';
import { ITvShow } from '../i-tv-show';
import { CONSTANTS } from '../tv-show-constants';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})
export class TvShowDetailsComponent implements OnInit {
  public selectedShow: ITvShow;
  public castInfo: ITvShow[];
  public seasonInfo: ITvShow[];
  public errorMessage: string;
  public allData: any;
  public back: string = CONSTANTS.back;
  public genres: string = CONSTANTS.genre;
  public unknown: string = CONSTANTS.unknown;
  public rating: string = CONSTANTS.rating;
  public noRating: string = CONSTANTS.noRating;
  public aired: string = CONSTANTS.aired;
  public language: string = CONSTANTS.language;
  public officialSite: string = CONSTANTS.officialSite;
  public seasonTitle: string = CONSTANTS.seasonTitle;
  public castTitle: string = CONSTANTS.castTitle;
  public seasonNumber: string = CONSTANTS.seasonNumber;
  constructor(private route: ActivatedRoute, private getTvShowsService: GetTvShowsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getTvShowsService.getShowDetails(id).subscribe(
      (data) => this.selectedShow = data,
      error => {
        this.errorMessage = error;
      }
    );
    this.getTvShowsService.getAll(id).subscribe(
      (data) => {
        this.seasonInfo = data._embedded.seasons;
        this.castInfo = data._embedded.cast;
      },
      error => {
        this.errorMessage = error;
      });
  }
  goBack(): void {
    this.getTvShowsService.goBack();
  }
}
