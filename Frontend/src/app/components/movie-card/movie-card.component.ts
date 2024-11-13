import { Component, Input } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';  // Import MatDialog
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';  // Import your dialog component
import { CommonModule } from '@angular/common';
import { DaySuffixPipe } from '../../day-suffix.pipe';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, RouterModule, DaySuffixPipe],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie: any;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private dialog: MatDialog  // Inject MatDialog
  ) {}

  navigateToEditMovie() {
    this.router.navigate(['/movies/edit', this.movie.id]);
  }

  navigateToDeleteMovie(): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteMovie();
      }
    });
  }

  private deleteMovie(): void {
    if (this.movie) {
      this.movieService.deleteMovieById(this.movie.id).subscribe(
        (response: string) => {
          console.log('Delete response:', response); // Log the response
          alert(response); // Display success message
          this.router.navigate(['/movies']);
        },
        (error) => {
          console.error('Error deleting movie', error);
          alert('There was an error deleting the movie. Please try again later.');
        }
      );
    }
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
      return 'assets/images/poster/default.jpg';
    }
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
}
