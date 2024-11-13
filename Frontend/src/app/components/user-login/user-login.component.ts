import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router ) {}  // Inject the UserService

  // Method to handle the login button click
  onLogin() {
    // Call the login method from UserService
    this.userService.login(this.email, this.password)
      .subscribe(
        (response: any) => {
          console.log('Login successful:', response);
          // localStorage.setItem('userId', response.id);
          // After successful login, save user data to localStorage
          localStorage.setItem('user', JSON.stringify({ userId: response.id, name: response.name, email: response.email }));

          // Redirect to dashboard or home page upon successful login
          this.router.navigate(['/movies/user']);  // Change this URL to your desired page
        },
        (error) => {
          console.error('Error:', error);
          this.errorMessage = 'Invalid email or password';  // Set error message
        }
      );
  }
}