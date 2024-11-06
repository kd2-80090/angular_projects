// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [MovieListComponent], // Declare non-standalone components
  imports: [BrowserModule, HttpClientModule], // Import necessary modules
  providers: [MovieService], // Provide services
//   bootstrap: [AppComponent] // Bootstrap the root component
})
export class AppModule { }
