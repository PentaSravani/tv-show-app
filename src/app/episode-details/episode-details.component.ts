import { Component, OnInit } from '@angular/core';
import {
  CONSTANTS, ITvShow,
  ActivatedRoute,
  GetTvShowsService,
  Location
} from '../tv-show-model';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit {
  public title: string = CONSTANTS.episodeTitle;
  public message: string = CONSTANTS.episodeMessage;
  public nameUnknown: string = CONSTANTS.nameUnknown;
  public aired: string = CONSTANTS.aired;
  public unknown: string = CONSTANTS.unknown;
  public episodeNumber: string = CONSTANTS.episodeNumber;
  public back: string = CONSTANTS.back;
  public noNumber: string = CONSTANTS.noNumber;

  public episodeInfo: ITvShow[] = [];
  public errorMessage: string;
  constructor(private route: ActivatedRoute, private getTvShowsService: GetTvShowsService, private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getTvShowsService.getEpisodes(id).subscribe(
      (data) => {
        this.episodeInfo = this.getShowArray(data);
      }, error => {
        this.errorMessage = error;
      }
    );
  }
  getShowArray(data): ITvShow[] {
    const arr = [];
    Object.keys(data).map(key => {
      arr.push(data[key]);
    });
    return arr;
  }
  goBack(): void {
    this.location.back();
  }
}
