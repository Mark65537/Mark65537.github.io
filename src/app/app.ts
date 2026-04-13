import { Component } from '@angular/core';

import { Navigation } from './shared/navigation/navigation';
import { Footer } from './shared/footer/footer';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [Navigation, Home, Footer],
  template: `
    <app-navigation/>
    <app-home />
    <app-footer />
  `,
})
export class App {}