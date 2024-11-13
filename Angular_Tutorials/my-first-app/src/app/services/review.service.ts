import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  // New method to fetch reviews for a movie
  getMovieReviews(movieId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/review/getMovieReviews/${movieId}`);
  } 
}
