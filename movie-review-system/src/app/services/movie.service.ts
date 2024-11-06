import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // This is fine for root service
})
export class MovieService {
  private apiUrl = 'http://localhost:8080/movie';

  constructor(private http: HttpClient) {
    console.log('HttpClient injected successfully!');
  }

  getMovies(pageNumber: number, pageSize: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllMovies`, {
      params: {
        pageNumber: pageNumber.toString(),
        pageSize: pageSize.toString(),
      },
    });
  }
}
