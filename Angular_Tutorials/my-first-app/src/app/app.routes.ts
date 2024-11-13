import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { GetReviewsByMovieIdComponent } from './components/get-reviews-by-movie-id/get-reviews-by-movie-id.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
// Import other components as necessary

export const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'get-reviews/:movieId', component: GetReviewsByMovieIdComponent },
  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
