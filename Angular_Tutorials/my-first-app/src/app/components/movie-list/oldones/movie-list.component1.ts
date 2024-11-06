import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
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

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getMovies(this.pageNumber, this.pageSize).subscribe({
      next: (data: any) => {
        this.movies = data.movies || data; // Adjust based on your data structure
        this.totalPages = Math.ceil(data.totalCount / this.pageSize); // If available
        this.errorMessage = this.movies.length > 0 ? '' : 'No movies found.';
      },
      error: (error) => {
        this.errorMessage = "Failed to load movies";
        console.error(error);
      }
    });
  }

  nextPage() {
    if (this.pageNumber < this.totalPages - 1) {
      this.pageNumber++;
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
    this.pageNumber = pageIndex;
    this.loadMovies();
  }

  onMovieAdded() {
    // Logic to handle when a movie is added
    this.loadMovies(); // Reload movies after adding a new one
  }
}
