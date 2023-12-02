import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent {

  constructor( private moviesService: MoviesService,
                private router: Router) {
    this.moviesService.$hoveredMovie.subscribe(movie => {
      this.hoveredMovieId = movie.id;
    });
  }


  //Selected movie wehn user hover over a movie
  @Input() set movieList(movieList: Array<Movie> ) {
    this._movieList = movieList;
  }
  public _movieList: Array<Movie> = [];
  public hoveredMovieId: string = '';
  moveredMovieSubscribtion: Subscription = new Subscription(); 


  //Emit the movie when user hover over a movie
  onHover(movie: Movie) {
    this.moviesService.onHover(movie);
  }

  addToWatchlist(id: string) {
    this.moviesService.addToWatchlist(id);
  }

  //Track by function to improve performance when filtering or sorting
  trackByorderIdFn(index: number) {
    return index;
  }

  goToMovieDetails(id: string) {
    this.router.navigate(['/movie-details', id]);
  }

  ngOnDestroy() { 
    if ( this.moveredMovieSubscribtion )  this.moveredMovieSubscribtion.unsubscribe();
  }
}
