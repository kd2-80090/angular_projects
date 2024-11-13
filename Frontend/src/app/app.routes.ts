import { PropertyListComponent } from './property/property-list/property-list.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { Routes } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { HomeComponent } from './components/home/home.component';
import { ReviewComponent } from './components/review/review.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { GetReviewsByMovieIdComponent } from './components/get-reviews-by-movie-id/get-reviews-by-movie-id.component';
import { AddReviewByUserComponent } from './components/add-review-by-user/add-review-by-user.component';

export const routes: Routes = [
  { path: 'property', component: PropertyListComponent },
  // { path: '', component: UserLoginComponent },
  { path: '', component: HomeComponent },
  // { path: 'movies', component: MovieListComponent },
  { path: 'movies/addMovie', component: AddMovieComponent },
  { path: 'movies/edit/:id', component: EditMovieComponent },
  { path: 'movies/delete/:id', component: EditMovieComponent },
  { path: 'reviews', component: ReviewComponent },
  // { path: 'user/login', component: UserLoginComponent },
  { path: 'movies', component: UserDashboardComponent },
  { path: 'movie/reviews/:id', component: GetReviewsByMovieIdComponent },
  { path: 'movie/addReview/:movieId', component: AddReviewByUserComponent}

];
