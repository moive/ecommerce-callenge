import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { register } from 'swiper/element/bundle';

import { routes } from './app.routes';

// 🔹 Registrar Swiper Web Components
register();

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes)],
};
