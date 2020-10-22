import {
  ComponentFixture, TestBed, Router
} from '../mock-test/mock-model';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const routerStub = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [FormsModule],
      providers: [{ provide: Router, useValue: routerStub }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to Search Component when search button is clicked', () => {
    const form = new FormGroup({ searchShow: new FormControl('House') });
    const expectedFormValue = form.value.searchShow;
    const spy = routerStub.navigate as jasmine.Spy;
    component.onSearch(form);
    expect(spy.calls.first().args[0]).toContain(expectedFormValue);
  });
});
