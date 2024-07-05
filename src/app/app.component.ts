import { Component, Inject, Optional } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: '[id="my-angular-app"]',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'micro-app';
  constructor(
    @Optional() @Inject('ROOT_ELEMENT') private rootElement: HTMLElement | null
  ) {
    if (this.rootElement) {
      console.log('Root element found:', this.rootElement);
    } else {
      console.error('Root element not found');
    }
  }
}
