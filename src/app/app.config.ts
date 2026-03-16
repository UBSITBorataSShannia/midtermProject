import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';     // Required for [(ngModel)]
import { routes } from './app.routes';
 
export const appConfig: ApplicationConfig = {
  providers: [
    // Register the routes with the Angular router
    provideRouter(routes),
 
    // Import FormsModule globally so [(ngModel)] works in all components.
    // Without this, two-way data binding on form inputs will throw errors.
    importProvidersFrom(FormsModule)
  ]
};
