import {
  ComponentFixture, TestBed,
  ActivatedRoute, Location,
  GetTvShowsService,
  showServiceStub, routeMock, locationStub, EPISODE_OBJECT
} from '../mock-test/mock-model';
import { EpisodeDetailsComponent } from './episode-details.component';

describe('EpisodeDetailsComponent', () => {
  let component: EpisodeDetailsComponent;
  let showService: GetTvShowsService;
  let fixture: ComponentFixture<EpisodeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodeDetailsComponent],
      providers: [EpisodeDetailsComponent,
        { provide: GetTvShowsService, useValue: showServiceStub },
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: Location, useValue: locationStub }
      ],
    });
    showService = TestBed.inject(GetTvShowsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return episode show list', () => {
    let expectedEpisodeList = [];
    showServiceStub.getEpisodes().subscribe(shows => expectedEpisodeList = shows);
    const episodes = component.getShowArray(EPISODE_OBJECT);
    expect(episodes).toEqual(expectedEpisodeList);
  });

  it('should navigate to previous page on click of back button', () => {
    const location = fixture.debugElement.injector.get(Location);
    component.goBack();
    expect(location.back).toHaveBeenCalled();
  });
});
