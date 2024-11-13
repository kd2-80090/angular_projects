import { Component, Input } from '@angular/core';
import { saveAs } from 'file-saver';
import { MovieService } from '../../service/movie.service';
import { CommonModule } from '@angular/common';
import { DaySuffixPipe } from '../../day-suffix.pipe';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-user-movie-card',
  standalone: true,
  imports: [CommonModule, DaySuffixPipe, ],
  templateUrl: './user-movie-card.component.html',
  styleUrls: ['./user-movie-card.component.css']
})
export class UserMovieCardComponent { 
  @Input() movie: any;
  @Input() movieId!: number;

  constructor(
    private movieService: MovieService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    console.log('Received Movie:', this.movie); // Debug log
    if (!this.movie?.id) {
      console.error('Movie ID is missing in the movie object');
    }

  }

  seeReviews(movieId : number) {
    this.router.navigate([`/movie/reviews`, this.movie.id]);
  }

  // Method to download movie ticket PDF
  downloadMovieTicket(movieId: number) {
    this.movieService.generateMovieTicketPdf(movieId).subscribe(
      (response: Blob) => {
        saveAs(response, `movie_ticket_${movieId}.pdf`);  // Download the PDF
      },
      error => {
        console.error('Error downloading movie ticket:', error);
      }
    );
  }

  getImagePath(movieName: string): string {
    if (movieName.toLowerCase() === 'singham') {
      return 'assets/images/poster/singham.jpg';
    } 
    else if (movieName.toLowerCase() === 'jawan') {
      return 'assets/images/poster/jawan.jpg';
    }
    else if (movieName.toLowerCase() === 'gadar 2') {
      return 'assets/images/poster/gadar 2.jpg';
    } 
    else if (movieName.toLowerCase() === 'salaar: part 1 - ceasefire') {
      return 'assets/images/poster/salar.jpg';
    }
    else if (movieName.toLowerCase() === 'animal') {
      return 'assets/images/poster/animal.jpg';
    }
    else if (movieName.toLowerCase() === 'tiger 3') {
      return 'assets/images/poster/tiger3.jpg';
    }
    else {
      // Default image if no match found
      return 'assets/images/poster/default_poster.png';
    }
  }
  
  // Method to navigate to Add Review page
  addReview(movieId: number) {
    
    if (!movieId) {
      console.error('Movie ID is not provided.');
      return;
    }
    console.log(`Navigating to add review for Movie ID: ${movieId}`);
    this.router.navigate([`/movie/addReview`, movieId]);
  }
  
}
