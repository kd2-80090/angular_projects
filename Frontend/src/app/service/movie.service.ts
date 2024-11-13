import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'http://localhost:8080/movie'; // Backend URL for movie operations

  constructor(private http : HttpClient) { }

  getAllMovies() {
    return this.http.get(`${this.apiUrl}/getAllMovies`);
  }

  // Method to add a new movie
  addMovie(movie: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addMovie`, movie);
  }

  // Method to update  movie
  editMovie(movie: any,id:number): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateMovie/${id}`, movie);
  }

  // Method to get a movie by id
  getMovieById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getMovieById/${id}`);
  }

  // Method to delete a movie by id
  deleteMovieById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteMovie/${id}`,{ responseType: 'text' });
  }

  // Method to generate movie ticket PDF by movie id
  generateMovieTicketPdf(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/dataToPdf/${id}`, { responseType: 'blob' });
  }
}
