import { Component, Input } from '@angular/core';
import { ReviewService } from '../../service/review.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-review-by-user',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './add-review-by-user.component.html',
  styleUrls: ['./add-review-by-user.component.css']
})
export class AddReviewByUserComponent {

  @Input() movieId!: number;

  content: string ='';

  constructor(
    private reviewService: ReviewService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Ensure movieId is provided or handle the error.
    this.movieId = Number(this.route.snapshot.paramMap.get('movieId'));

    if (!this.movieId) {
      console.error('Movie ID is missing');
      this.router.navigate(['/movies']); // Redirect to movies list if no movie ID
    } else {
      console.log(`Received Movie ID for Review: ${this.movieId}`);
    }
  }

  submitReview() {
    if(this.content.trim() === '') {
      alert('Please provide a review');
      return;
    }

    const reviewData = {
      content: this.content,
    }

    this.reviewService.addReview(this.movieId,reviewData).subscribe(
      responseData => {
        alert('Review added successfully');
        this.router.navigate([`/movies`]);
      },
      error => {
        console.error('Error adding review: ',error);
        alert('There was an error while submitting your review. Please try again.');
      }
    )
  }
}
