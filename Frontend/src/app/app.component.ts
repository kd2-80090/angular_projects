import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './service/housing.service';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieService } from './service/movie.service';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterModule,
    RouterOutlet,
    NavBarComponent,
    FooterComponent
],
  providers : [
    HousingService,
    MovieService
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';

  constructor(private router: Router) {}
}
