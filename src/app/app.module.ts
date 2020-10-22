// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TvShowListComponent } from './tv-show-list/tv-show-list.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { TvShowSearchComponent } from './tv-show-search/tv-show-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { FooterComponent } from './footer/footer.component';

// Services
import { GetTvShowsService } from './tv-service/get-tv-shows.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TvShowListComponent,
    TvShowDetailsComponent,
    TvShowSearchComponent,
    PageNotFoundComponent,
    EpisodeDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [GetTvShowsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
