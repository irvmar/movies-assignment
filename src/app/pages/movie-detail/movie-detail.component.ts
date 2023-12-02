import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/interfaces/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit  {

  constructor(private route: ActivatedRoute,
              private moviesService: MoviesService ) {
                this.selectedMovie = this.moviesService.getMovieById(this.route.snapshot.params['id']);
               }

  selectedMovie: Movie;

  ngOnInit(): void {
  }

}
