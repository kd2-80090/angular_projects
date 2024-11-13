import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-get-reviews-by-movie-id',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-reviews-by-movie-id.component.html',
  styleUrls: ['./get-reviews-by-movie-id.component.css']
})
export class GetReviewsByMovieIdComponent implements OnInit {
  movieId: number | null = null;
  reviews: any[] = [];
  errorMessage: string | undefined;

  constructor(private route: ActivatedRoute, private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.paramMap.get('movieId'));
    if (this.movieId) {
      this.loadReviews();
    }
  }

  loadReviews(): void {
    this.reviewService.getMovieReviews(this.movieId!).subscribe({
      next: (data: any) => {
        this.reviews = data.reviews || [];
      },
      error: (error) => {
        this.errorMessage = "Failed to load reviews";
        console.error(error);
      }
    });
  }
}
