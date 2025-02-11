import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // ✅ Use provideHttpClient
import { PetService } from './services/pet.service'; 

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(CommonModule), 
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()), // ✅ Correct way to provide HttpClient
    PetService // ✅ Provide PetService
  ]
};
