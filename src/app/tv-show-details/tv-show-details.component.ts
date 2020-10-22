import { Component, OnInit } from '@angular/core';
import {
  CONSTANTS, ITvShow,
  ActivatedRoute,
  GetTvShowsService,
  Location
} from '../tv-show-model';
@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})
export class TvShowDetailsComponent implements OnInit {
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

  public selectedShow: ITvShow;
  public castInfo: ITvShow[];
  public seasonInfo: ITvShow[];
  public errorMessage: string;
  public allData: any;
  constructor(private route: ActivatedRoute, private getTvShowsService: GetTvShowsService, private location: Location) { }

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
    this.location.back();
  }
}
