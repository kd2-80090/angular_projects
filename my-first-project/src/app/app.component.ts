import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieComponent } from "./MyComponents/movie/movie.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-project';
  // constructor(){
    // setTimeout(() => {
    //   this.title = "All Movies"
    // }, 2000);
  // }  
}
