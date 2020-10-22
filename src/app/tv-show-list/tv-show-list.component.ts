import { Component, OnInit } from '@angular/core';
import { CONSTANTS, ITvShow, GetTvShowsService } from '../tv-show-model';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TvShowListComponent implements OnInit {
  public showList: ITvShow[] = [];
  public popularShowList: ITvShow[];
  public genreShowList: ITvShow[];
  public errorMessage: string;

  public title: string = CONSTANTS.showTitle;
  public rating: string = CONSTANTS.rating;
  public noRating: string = CONSTANTS.noRating;
  public showMessage: string = CONSTANTS.showMessage;
  constructor(private getTvShows: GetTvShowsService) { }

  ngOnInit(): void {
    this.getTvShows.getShows().subscribe(
      (data) => {
        this.showList = this.getShowArray(data);
        // Popular Shows based on rating
        this.popularShowList = this.getPopularShows(this.showList);
        this.popularShowList = this.getSortedShows(this.popularShowList);

        // Tv Shows based on genre
        let genreList: string[] = [];
        genreList = this.getUniqueGenreArray(this.showList);
        this.genreShowList = this.getGenreShows(genreList, this.showList);
      }, error => {
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
  getPopularShows(showList): ITvShow[] {
    return showList.filter(show => show.rating.average >= 8.9);
  }

  getSortedShows(popularShowList): ITvShow[] {
    popularShowList.sort((a: any, b: any) => {
      return a.rating.average - b.rating.average;
    });
    return popularShowList;
  }

  getUniqueGenreArray(showList): string[] {
    let genreArray = [];
    let uniqueGenreList: string[] = [];

    showList.forEach(el => {
      genreArray.push(el.genres);
    });
    genreArray = genreArray.flat();
    uniqueGenreList = [...new Set(genreArray)];
    return uniqueGenreList;
  }

  getGenreShows(genreList: any[], showList: any[]): any[] {
    const showArrayOnGenre = [];
    genreList.forEach(item => {
      const shows = showList.filter(show => show.genres.includes(item));
      const showslist = { genre: item, show: shows };
      showArrayOnGenre.push(showslist);
    });
    return showArrayOnGenre;
  }


}
