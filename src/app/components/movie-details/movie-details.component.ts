import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

  @Input() selectedMovie: Movie | null = null;

  constructor( private movieServie: MoviesService ) { }


  addToWatchlist(id: string) {
    this.movieServie.addToWatchlist(id);
  }

}
