import { Component, Input } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserMovieCardComponent } from '../user-movie-card/user-movie-card.component';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [
    UserMovieCardComponent, 
    CommonModule],
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  movies !: any
  @Input() movie: any; 
  movieId!: number;

  constructor(private movieService : MovieService,private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    // const user = JSON.parse(localStorage.getItem('user') || '{}');
    // if (user && user.id) {
    //   this.userId = user.id;
    //   console.log('User ID retrieved:', this.userId); // Debug log
    // } else {
    //   console.error('User ID not found.');
    //   // You may want to redirect the user to a login page or show an error message
    //   this.router.navigate(['/user/login']);
    // }

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

}
