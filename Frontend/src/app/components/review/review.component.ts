import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  movie = {
    title: 'Inception',
    description: 'A mind-bending thriller directed by Christopher Nolan.',
    posterUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH'  // Example image URL
  };

  reviews = [
    {
      reviewerName: 'John Doe',
      rating: 4,
      reviewText: 'The movie was great with an engaging storyline. The performances were top-notch, especially Leonardo DiCaprio.'
    },
    {
      reviewerName: 'Jane Smith',
      rating: 5,
      reviewText: 'A mind-bending thriller that keeps you on the edge of your seat. The plot twists are brilliant, and the visual effects are spectacular.'
    },
    {
      reviewerName: 'Mark Johnson',
      rating: 3,
      reviewText: 'Interesting concept but the pacing was a bit slow. Still worth watching for its unique storytelling.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
