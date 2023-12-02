import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies: Array<Movie> = [
    {
      id: '1',
      title: "Tenet",
      description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      rating: 7.8,
      duration: 150, // 2h 30min
      genre: "Action, Sci-Fi",
      releaseDate: new Date("2020-09-03"),
      trailerLink: "https://www.youtube.com/watch?v=LdOM0x0XDMo",
      image: "/assets/images/Tenet.png"
    },
    {
      id: '2',
      title: "Spider-Man: Into the Spider-Verse",
      description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
      rating: 8.4,
      duration: 117, // 1h 57min
      genre: "Action, Animation, Adventure",
      releaseDate: new Date("2018-12-14"),
      trailerLink: "https://www.youtube.com/watch?v=tg52up16eq0",
      image: "/assets/images/Spider Man.png"
    },
    {
      id: '3',
      title: "Knives Out",
      description: "A detective investigates the death of a patriarch of an eccentric, combative family.",
      rating: 7.9,
      duration: 130, // 2h 10min
      genre: "Comedy, Crime, Drama",
      releaseDate: new Date("2019-11-27"),
      trailerLink: "https://www.youtube.com/watch?v=qGqiHJTsRkQ",
      image: "/assets/images/Knives Out.png"
    },
    {
      id: '4',
      title: "Guardians of the Galaxy",
      description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
      rating: 8.0,
      duration: 130, // 2h 10min
      genre: "Action, Adventure, Comedy",
      releaseDate: new Date("2014-08-01"),
      trailerLink: "https://www.youtube.com/watch?v=d96cjJhvlMA",
      image: "/assets/images/Guardians of The Galaxy.png"
    },
    {
      id: '5',
      title: "Avengers: Age of Ultron",
      description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
      rating: 7.3,
      duration: 141, // 2h 21min
      genre: "Action, Adventure, Sci-Fi",
      releaseDate: new Date("2015-05-01"),
      trailerLink: "https://www.youtube.com/watch?v=tmeOjFno6Do",
      image: "/assets/images/Avengers.png"
    }
  ];
  $hoveredMovie = new BehaviorSubject<Movie>(this.movies[0]);
  lastHoveredMovie: Movie | null = null;

  constructor() { }

  getMovies(): Array<Movie> {
    this.addwatchlistToMovies();
    return this.movies;
  }
  
  // Get movie by id
  getMovieById(id: string): Movie {
    const movie = this.movies.find(movie => movie.id === id);
    if (!movie) return {} as Movie;
    movie.watchlist = this.getwatchlist().includes(movie.id);
    return movie;
  }


  addwatchlistToMovies() {
    const watchlist = this.getwatchlist();
    this.movies.forEach(movie => {
      movie.watchlist = watchlist.includes(movie.id);
    });
  }


  // Add movie to watchlist in Storage or remove it if it's already there
  addToWatchlist(id: string) {
    const movie = this.movies.find(movie => movie.id === id);
    if (!movie) return;
    const watchlist = this.getwatchlist();
    if (watchlist.includes(id)) {
      movie.watchlist = false;
      localStorage.setItem('watchlist', JSON.stringify(watchlist.filter(movieId => movieId !== id)));
      return;
    }
    movie.watchlist = true;
    watchlist.push(id);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }

  //Emit the movie when user hover over a movie
  onHover(movie: Movie) {
    // console.log(movie, 'movie');
    if(movie === this.lastHoveredMovie) return;
    this.lastHoveredMovie = movie;
    this.$hoveredMovie.next(movie);
  }

  // Get watchlist from local storage
  getwatchlist(): Array<string> {
    const watchlist = localStorage.getItem('watchlist');
    return watchlist ? JSON.parse(watchlist) : [];
  }

}
