import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'movie-details/:id',
    component: MovieDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
