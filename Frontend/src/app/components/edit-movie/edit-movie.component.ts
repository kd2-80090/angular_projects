import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../service/movie.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movie = {
    id: 0,
    movieName: '',
    releaseDate: ''
  };

  constructor(
    private movieService: MovieService, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get the 'id' parameter from the route
    const movieId = +this.route.snapshot.paramMap.get('id')!; // Convert to number using '+'
    if (movieId) {
      this.loadMovieDetails(movieId); // Only fetch if the ID is valid
    } else {
      console.error('Invalid movie ID:', movieId);
    }
  }


  // Method to fetch the movie details by ID
  loadMovieDetails(id: number): void {
    this.movieService.getMovieById(id).subscribe(
      (movie: any) => {
        this.movie = movie;  // Assign the fetched movie to the component's movie property
      },
      error => {
        console.log('Error fetching movie details', error);
      }
    );
  }

  // Method to update the movie details
  editMovieDetails(): void {
    this.movieService.editMovie(this.movie, this.movie.id).subscribe(
      data => {
        console.log("Movie updated successfully");
        this.router.navigate(['/movies']);  // Navigate back to movie list
      },
      error => {
        console.log('Error updating movie', error);
      }
    );
  }
}
