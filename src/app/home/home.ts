import { AfterViewInit, Component, ElementRef, OnInit, signal } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageSwitcher } from '../components/language-switcher/language-switcher';
import { InViewportDirective } from '../directives/in-viewport-directive';

@Component({
  selector: 'app-home',
  imports: [TranslocoModule, LanguageSwitcher, InViewportDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  isMenuOpen = signal(false);

  ngAfterViewInit(): void {}

  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }
}
