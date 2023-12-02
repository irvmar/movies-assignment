import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  movies: Array<Movie> = [];

  constructor(private movieService: MoviesService) {

  }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    this.movieService.onHover(this.movies[0]);
  }


  onSort(event: { criteria: string, direction: string }) {
    const { criteria, direction } = event;
    const isAscending = direction === 'asc';
    switch (criteria) {
      case 'title':
        this.movies.sort((a, b) =>
          isAscending ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
        );
        break;

      case 'releaseDate':
        this.movies.sort((a, b) =>
          isAscending ? new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime() :
            new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
        );
        break;
      default:
        break;
    }

    // this.hoveredMovie = this.movies[0];

    //set the hovered movie to the first movie in the list triggering event emitter form movies-list component
    this.movieService.onHover(this.movies[0]);

  }

}
