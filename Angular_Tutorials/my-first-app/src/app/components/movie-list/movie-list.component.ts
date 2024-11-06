import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  standalone: true,
  imports: [AddMovieComponent, CommonModule],
})

export class MovieListComponent implements OnInit {
  movies: any[] = [];
  totalCount: number = 0;
  pageNumber: number = 0;
  pageSize: number = 10; // Default page size
  totalPages: number = 0; // Total number of pages
  errorMessage: string | undefined;
  router: any;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getMovies(this.pageNumber, this.pageSize).subscribe({
      next: (data: any) => {
        console.log('API Response:', data);  // Log the entire response for debugging
  
        // Check if 'data' is an object and contains the 'movies' property
        if (data && data.movies) {
          if (Array.isArray(data.movies)) {
            this.movies = data.movies;  // Assign the movies array to the component's movies
            this.totalCount = data.totalCount || 0;  // Total count of movies
            this.totalPages = Math.ceil(this.totalCount / this.pageSize);  // Calculate total pages
  
            console.log('Movies:', this.movies);
            console.log('Total Pages:', this.totalPages);
          } else {
            this.errorMessage = 'Movies is not an array';
            console.log('Error: Movies is not an array');
          }
        } else {
          this.errorMessage = 'No movies found or invalid response structure';
          console.log('Error: No movies found or invalid response structure.');
        }
      },
      error: (error) => {
        this.errorMessage = "Failed to load movies";
        console.error(error);
      }
    });
  }  
  
  nextPage() {
    console.log('Page Number (before):', this.pageNumber);
    if (this.pageNumber < this.totalPages - 1) {
      this.pageNumber++;
      console.log('Page Number (after):', this.pageNumber);  // Check page number after increment
      this.loadMovies();
    }
  }  
  
  previousPage() {
    if (this.pageNumber > 0) {
      this.pageNumber--;
      this.loadMovies();
    }
  }
  
  goToPage(pageIndex: number) {
    console.log('Go to Page:', pageIndex);
    this.pageNumber = pageIndex;
    this.loadMovies();
  }  

  navigateToAddMovie(): void {
    this.router.navigate(['/add-movie']);  // Navigate to /add-movie route
  }

  onMovieAdded() {
    this.loadMovies(); // Reload movies after adding a new one
  }
}
