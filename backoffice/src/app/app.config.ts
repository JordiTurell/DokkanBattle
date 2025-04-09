import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from '@infrastructure/interceptors/error/error.interceptor';
import { tokenInterceptor } from '@infrastructure/interceptors/token/token.interceptor';
import { loadingInterceptor } from '@infrastructure/interceptors/loading/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(withInterceptors([
      tokenInterceptor,
      loadingInterceptor,
      errorInterceptor
    ]))
  ]
};
