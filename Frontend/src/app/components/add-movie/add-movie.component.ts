import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../service/movie.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  movie = {
    movieName: '',
    releaseDate: ''
  };

  constructor(private movieService: MovieService, private router: Router) {}

  addMovieDetails() {
    this.movieService.addMovie(this.movie).subscribe(
      data => {
        console.log("Movie added successfully");
        this.router.navigate(['/movies']);
      },
      error => {
        console.log('Error adding movie',error);
      }

    )
  }
}
