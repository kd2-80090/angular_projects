import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private apiUrl = 'https://api.example.com/reviews';

  constructor(private http: HttpClient) { }

  getReviews(movieId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}`);
  }

  addReview(movieId: string, reviewData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/movie/${movieId}`, reviewData);
  }
}
