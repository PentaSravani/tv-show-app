import { GetTvShowsService } from './get-tv-shows.service';
import { SHOW_OBJECT } from './mock-tv-shows-service';
import { ITvShow } from '../i-tv-show';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('GetTvShowsService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let showService: GetTvShowsService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    showService = new GetTvShowsService(httpClientSpy as any, undefined);
  });

  it('should fetch all the expected shows', () => {
    const expectedShows: ITvShow[] = SHOW_OBJECT;
    let showList;
    httpClientSpy.get.and.returnValue(of(expectedShows));
    showService.getShows().subscribe(shows => { showList = shows; })
    expect(showList).toEqual(expectedShows);
  });

  it('should return expected shows (HttpClient called once)', () => {
    const expectedShows: ITvShow[] = SHOW_OBJECT;
    let showList;
    httpClientSpy.get.and.returnValue(of(expectedShows));

    showService.getShows().subscribe(
      shows => {
        showList = shows;
        expect(showList).toEqual(expectedShows)
      },
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });
    httpClientSpy.get.and.returnValue(of(errorResponse));
    showService.getShows().subscribe(
      shows => throwError('expected an error, not shows'),
      error => expect(error.message).toContain('test 404 error')
    );
  });


});
