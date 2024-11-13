import { Component } from '@angular/core';
import { ReviewService } from '../../service/review.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-reviews-by-movie-id',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-reviews-by-movie-id.component.html',
  styleUrl: './get-reviews-by-movie-id.component.css'
})
export class GetReviewsByMovieIdComponent {

  reviews: any[] = [];
  noReviewsMessage: string = '';

  constructor(
    private reviewService : ReviewService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    const movieId = +this.route.snapshot.paramMap.get('id')!;
    if (movieId) {
      this.loadReviewDetails(movieId); // Only fetch if the ID is valid
    } else {
      console.error('Invalid movie ID:', movieId);
    }
  }

  loadReviewDetails(movieId : number) : void {

    this.reviewService.getReviewsByMovieId(movieId).subscribe(
      (response: any) => {
        console.log('Response: ', response);
        
        if (response && response && Array.isArray(response)) {
          this.reviews = response;
        } else {
          this.reviews = [];
          this.noReviewsMessage = 'No Reviews Found For This Movie';
        }
      },
      (error) => {
        console.error('Error fetching review details: ', error);
        this.reviews = [];
        this.noReviewsMessage = 'An error occurred while fetching reviews.';
      }
    );
  }
}
