import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Mats Bos');

  constructor(private transloco: TranslocoService) {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.transloco.setActiveLang(savedLang);
    }
  }
}
