import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: 'ROOT_ELEMENT',
      useValue: document.getElementById('my-angular-app'),
    },
  ],
};
