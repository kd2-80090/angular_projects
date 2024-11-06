import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListComponent } from "./components/movie-list/movie-list.component";  // Import RouterOutlet for routing

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieListComponent],  // Add RouterOutlet to imports
  template: `<app-movie-list></app-movie-list>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
