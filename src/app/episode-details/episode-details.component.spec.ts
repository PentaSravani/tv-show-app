import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { GetTvShowsService } from '../tv-service/get-tv-shows.service';
import { showServiceStub } from '../tv-service/mock-tv-shows-service';
import { EpisodeDetailsComponent } from './episode-details.component';

fdescribe('EpisodeDetailsComponent', () => {
  let component: EpisodeDetailsComponent;
  let showService: GetTvShowsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodeDetailsComponent],
      providers: [EpisodeDetailsComponent,
        { provide: GetTvShowsService, useValue: showServiceStub },
        { provide: ActivatedRoute, useValue : { paramMap: of({ get: v => { return { id: 123 }; } })}}
      ]
    })
    component = TestBed.inject(EpisodeDetailsComponent);
    showService = TestBed.inject(GetTvShowsService);
  });

  it('should load episode list after Angular calls ngOnInit', () => {
    let expectedShowList = [];
    showServiceStub.getShows().subscribe(shows => expectedShowList = shows);
    component.ngOnInit();
    expect(component.episodeInfo).toEqual(expectedShowList);
  });

});
