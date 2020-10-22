import {
  TestBed,
  GetTvShowsService,
  showServiceStub, SHOW_OBJECT
} from '../mock-test/mock-model';
import { TvShowListComponent } from './tv-show-list.component';

describe('TvShowListComponent', () => {
  let component: TvShowListComponent;
  let showService: GetTvShowsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TvShowListComponent],
      providers: [TvShowListComponent, { provide: GetTvShowsService, useValue: showServiceStub }]
    });
    component = TestBed.inject(TvShowListComponent);
    showService = TestBed.inject(GetTvShowsService);
  });

  it('should load show list after Angular calls ngOnInit', () => {
    let expectedShowList = [];
    showServiceStub.getShows().subscribe(shows => expectedShowList = shows);
    component.ngOnInit();
    expect(component.showList).toEqual(expectedShowList);
  });

  it('should load popular shows based on rating', () => {
    let expectedPopularShows = [];
    showServiceStub.getPopularShows().subscribe(shows => expectedPopularShows = shows);
    const popularShows = component.getPopularShows(SHOW_OBJECT);
    expect(popularShows).toEqual(expectedPopularShows);
  });

  it('load popular shows in a sorted order based on rating', () => {
    let expectedPopularShows = [];
    showServiceStub.getSortedPopularShows().subscribe(shows => expectedPopularShows = shows);
    const popularShows = component.getSortedShows(SHOW_OBJECT);
    expect(popularShows).toEqual(expectedPopularShows);
  });

  it('get unique genre list', () => {
    const expectedUniqueGenreList = ['Drama', 'Science-Fiction', 'Thriller', 'Horror', 'Action'];
    const uniqueGenreList = component.getUniqueGenreArray(SHOW_OBJECT);
    expect(uniqueGenreList.length).toEqual(expectedUniqueGenreList.length);
  });
});
