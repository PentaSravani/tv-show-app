import {
  ComponentFixture, TestBed,
  ActivatedRoute,
  GetTvShowsService,
  showServiceStub, routeMock, Router
} from '../mock-test/mock-model';
import { TvShowSearchComponent } from './tv-show-search.component';

xdescribe('TvShowSearchComponent', () => {
  let component: TvShowSearchComponent;
  let fixture: ComponentFixture<TvShowSearchComponent>;
  let router: Router;
  const routerMock = router.routeReuseStrategy.shouldReuseRoute = () => false;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TvShowSearchComponent],
      providers: [TvShowSearchComponent,
        { provide: GetTvShowsService, useValue: showServiceStub },
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: Router, useValue: routerMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
