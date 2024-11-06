// Inside add-movie.component.ts
import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service'; // Adjust the import
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
  standalone: true,
  imports: [FormsModule] // Include FormsModule here
})
export class AddMovieComponent {
  movie = {
    movieName: '',
    releaseDate: ''
  };

  constructor(private movieService: MovieService) {}

  addMovie() {
    this.movieService.addMovie(this.movie).subscribe({
      next: (response) => {
        console.log('Movie added:', response);
        // Optionally reset the form or give feedback to the user
        this.movie = { movieName: '', releaseDate: ''};
      },
      error: (error) => {
        console.error('Error adding movie:', error);
      }
    });
  }
}
