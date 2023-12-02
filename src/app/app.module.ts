import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HeroComponent } from './components/hero/hero.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieHeroComponent } from './components/movie-hero/movie-hero.component';
import { MovieSpecificsComponent } from './components/movie-specifics/movie-specifics.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { SortingMoviesActionsComponent } from './components/sorting-movies-actions/sorting-movies-actions.component';
import { VideoTrailerComponent } from './components/video-trailer/video-trailer.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeroComponent,
    MoviesListComponent,
    MovieHeroComponent,
    MovieSpecificsComponent,
    MovieDetailComponent,
    SortingMoviesActionsComponent,
    VideoTrailerComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
