import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from "../movie-detail/movie-detail.component";
import { Movie } from '../../Movie';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, MovieDetailComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

  movies!: Movie[];

  constructor() {
    this.movies  = [
      {
        sno:1,
        title:"Baby John",
        desc:"Releasing in December 2024",
        active:true
      },
      {
        sno:2,
        title:"Jawan",
        desc:"Released in Diwali 2023",
        active:false
      },
      {
        sno:3,
        title:"Singham Returns",
        desc:"Diwali 2024 release",
        active:true
      }
    ]
  }
}
