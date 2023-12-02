import { Component, OnDestroy, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-trailer',
  templateUrl: './video-trailer.component.html',
  styleUrls: ['./video-trailer.component.scss']
})
export class VideoTrailerComponent implements OnDestroy {

  @Input() selectedMovie: Movie | null = null;

  constructor(private sanitizer: DomSanitizer,
    private moviesService: MoviesService) {

  }

  public _hoveredMovie: Movie | null = null;
  visibleDetails: boolean = true;
  moveredMovieSubscribtion: Subscription = new Subscription();


  ngOnInit(): void {
    if(this.selectedMovie){
      this._hoveredMovie = { ...this.selectedMovie, trailerLink: this.getVideoSafeURL(this.selectedMovie.trailerLink as string) };
    }
    else {
      this.moveredMovieSubscribtion = this.moviesService.$hoveredMovie.subscribe(movie => {
        this._hoveredMovie = { ...movie, trailerLink: this.getVideoSafeURL(movie.trailerLink as string) };
        this.visibleDetails = false;
        setTimeout(() => {
          this.visibleDetails = true;
        }, 500);
      });
    }
  }

  getVideoSafeURL(url: string): SafeResourceUrl {
    if (!url) return '';
    //Replace the watch?v= with embed/ to get the video URL
    url = url.replace("watch?v=", "embed/");
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnDestroy() {
    if (this.moveredMovieSubscribtion) this.moveredMovieSubscribtion.unsubscribe();
  }

}
