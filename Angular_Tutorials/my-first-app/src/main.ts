import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Adjust if needed
import { provideHttpClient, withFetch } from '@angular/common/http'; // Import withFetch
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()) // Enable fetch for HttpClient
  ]
}).catch(err => console.error(err));
