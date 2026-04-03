import { Component } from '@angular/core';

import { Footer } from './shared/footer/footer';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [Home, Footer],
  template: `
    <app-home />
    <app-footer />
  `,
})
export class App {}