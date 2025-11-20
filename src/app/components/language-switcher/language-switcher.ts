import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-language-switcher',
  imports: [FormsModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css',
})
export class LanguageSwitcher {
  availableLangs = [
    { code: 'en', label: 'EN' },
    { code: 'nl', label: 'NL' },
  ];

  constructor(private translocoService: TranslocoService) {}

  get activeLang() {
    return this.translocoService.getActiveLang();
  }

  set activeLang(lang: string) {
    this.changeLang(lang);
  }

  changeLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.translocoService.setActiveLang(lang);
  }
}
