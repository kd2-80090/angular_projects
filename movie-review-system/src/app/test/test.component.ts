// src/app/test/test.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'], // You can leave this out if not needed
})
export class TestComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {
    console.log('HttpClient injected successfully!');
  }

  ngOnInit() {
    // Making a simple GET request to a public API
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(
      (response) => {
        this.data = response; // Store the response data
        console.log('Data fetched successfully:', this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
