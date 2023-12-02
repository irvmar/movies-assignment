import { SafeResourceUrl } from '@angular/platform-browser';

export interface Movie {
    id: string;
    title: string;
    description: string;
    rating: number;
    duration: number;
    genre: string;
    releaseDate: Date;
    trailerLink: string | SafeResourceUrl;
    image: string;
    watchlist?: boolean;
  }
  