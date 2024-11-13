
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model'; // Adjust the import according to your structure if you have a Movie model

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  getMovieReviews(movieId: number) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8080/movie'; // Base API URL for better management

  constructor(private http: HttpClient) {} // Inject HttpClient

  // Get movies with pagination
  // getMovies(pageNumber: number, pageSize: number): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/getAllMovies?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  // } 
  getMovies(pageNumber: number, pageSize: number): Observable<{ movies: any[]; totalCount: number }> {
    return this.http.get<{ movies: any[]; totalCount: number }>(
      `${this.apiUrl}/getAllMovies?pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
  }
  

  // Add a new movie
  addMovie(movie: any): Observable<any> { // Adjust type as needed, e.g., use Movie if defined
    return this.http.post<any>(`${this.apiUrl}/addMovie`, movie);
  }
}
