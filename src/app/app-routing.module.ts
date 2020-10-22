import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { TvShowListComponent } from './tv-show-list/tv-show-list.component';
import { TvShowSearchComponent } from './tv-show-search/tv-show-search.component';

export const routes: Routes = [
  { path: 'home', component: TvShowListComponent },
  { path: 'details/:id', component: TvShowDetailsComponent },
  { path: 'episode/:id', component: EpisodeDetailsComponent },
  { path: 'search/:searchString', component: TvShowSearchComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
