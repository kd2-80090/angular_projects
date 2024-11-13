import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = 'http://localhost:8080/user';  // Base URL for user API
  private loginUrl: string = `${this.apiUrl}/login`;  // URL for login endpoint

  constructor(private http: HttpClient) { }

  // Method to handle login requests
  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };

    // Send the login data to the backend and return the observable
    return this.http.post(this.loginUrl, loginData);
  }
}
