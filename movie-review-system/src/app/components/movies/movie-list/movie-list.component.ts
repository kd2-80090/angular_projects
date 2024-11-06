// src/app/components/movie-list/movie-list.component.ts
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service'; // Adjust the path as necessary

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any[] = []; // Define a property to hold the movies

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies(0, 10); // Load movies on initialization
  }

  loadMovies(pageNumber: number, pageSize: number): void {
    this.movieService.getMovies(pageNumber, pageSize).subscribe({
      next: (data) => {
        this.movies = data; // Handle the successful response
      },
      error: (err) => {
        console.error('Error fetching movies:', err); // Handle errors
      }
    });
  }
}
