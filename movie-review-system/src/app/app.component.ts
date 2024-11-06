import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { MovieService } from './services/movie.service'; // Import your MovieService

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule], // Include HttpClientModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-review-system';

  constructor(private movieService: MovieService) {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getMovies(0, 10).subscribe({
      next: (data) => {
        console.log('Movies loaded:', data);
      },
      error: (err) => {
        console.error('Error loading movies:', err);
      }
    });
  }
}
