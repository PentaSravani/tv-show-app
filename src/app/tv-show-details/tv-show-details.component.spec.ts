import {
  ComponentFixture, TestBed,
  ActivatedRoute, Location,
  GetTvShowsService,
  showServiceStub, routeMock, locationStub
} from '../mock-test/mock-model';
import { TvShowDetailsComponent } from './tv-show-details.component';


xdescribe('TvShowDetailsComponent', () => {
  let component: TvShowDetailsComponent;
  let fixture: ComponentFixture<TvShowDetailsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TvShowDetailsComponent],
      providers: [TvShowDetailsComponent,
        { provide: GetTvShowsService, useValue: showServiceStub },
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: Location, useValue: locationStub }
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to previous page on click of back button', () => {
    const location = fixture.debugElement.injector.get(Location);
    component.goBack();
    expect(location.back).toHaveBeenCalled();
  });

});
