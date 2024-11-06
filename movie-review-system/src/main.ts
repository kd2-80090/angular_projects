import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Adjust the path as necessary
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [HttpClientModule], // Add HttpClientModule as a provider here
}).catch((err) => console.error(err));
