import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ITvShow } from '../i-tv-show';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetTvShowsService {
  API_URL = `${environment.baseUrl}api.tvmaze.com`;
  constructor(private http: HttpClient) { }

  getShows(): Observable<ITvShow> {
    return this.http.get<ITvShow>(`${this.API_URL}/shows`).pipe(
      catchError(this.handleError)
    );
  }

  getShowDetails(id: string): Observable<ITvShow> {
    return this.http.get(`${this.API_URL}/shows/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getEpisodes(id: string): Observable<ITvShow> {
    return this.http.get(`${this.API_URL}/seasons/${id}/episodes`).pipe(
      catchError(this.handleError)
    );
  }

  getAll(id: string): Observable<ITvShow> {
    return this.http.get(`${this.API_URL}/shows/${id}?embed[]=episodes&embed[]=cast&embed[]=seasons`).pipe(
      catchError(this.handleError)
    );
  }


  getShowSearch(searchString: string): Observable<ITvShow> {
    return this.http.get(`${this.API_URL}/search/shows?q=:${searchString}`).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse): Observable<Error> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
