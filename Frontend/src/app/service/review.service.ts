import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private baseUrl: string = 'http://localhost:8080/review';

  constructor(private http : HttpClient) { }

  //Method to get all reviews by movie id
  getReviewsByMovieId(movieId: number) {
    return this.http.get(`${this.baseUrl}/getMovieReviews/${movieId}`);
  }

  // http://localhost:8080/review/addReview/4/2
  //Method to add review for a movie by user
  addReview( movieId: number,review: any) {
    return this.http.post(`${this.baseUrl}/addReview/${movieId}`,review);
  }

}
