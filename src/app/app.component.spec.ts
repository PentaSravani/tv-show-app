import {
  TestBed,
  Location,
  Router,
  RouterTestingModule
} from './mock-test/mock-model';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { routes } from './app-routing.module';


describe('AppComponent', () => {
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        FormsModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
      ]
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it('should create the tv-show application', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeDefined();
  });

  it('on load of the application, it navigates to /home', () => {
    router.navigate(['/home']).then(() =>
      expect(location.path()).toBe('/home'));
  });
});
