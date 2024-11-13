import { Component, Input } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieCardComponent,
    CommonModule, 
    RouterModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies !: any
  @Input() movie: any; 

  constructor(private movieService : MovieService,private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.movieService.getAllMovies().subscribe(
      (data: any)=>{
              this.movies=data.movies;
              console.log(data);
      },
      error=>{
               console.log(error);
      }
    );
  }

  navigateToAddMovie() {
    this.router.navigate(['/movies/addMovie']);
  }

  navigateToEditMovie() {
    // Navigate to the edit page with the movie id as a parameter
    this.router.navigate(['/movies/edit', this.movie.id], {
      queryParams: {
        movieName: this.movie.movieName,
        releaseDate: this.movie.releaseDate
      }
    });
  }

  
  
  
}
