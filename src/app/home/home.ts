import { AfterViewInit, Component, ElementRef, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  constructor(private el: ElementRef) {}

  isMenuOpen = signal(false);

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();

    // Optional: detect DOM changes and re-observe
    const mutationObserver = new MutationObserver(() => {
      this.setupIntersectionObserver();
    });

    mutationObserver.observe(this.el.nativeElement, { childList: true, subtree: true });
  }

  private setupIntersectionObserver() {
    const inViewport = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-inViewport', entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(inViewport);

    const elements = this.el.nativeElement.querySelectorAll('[data-inviewport]');
    elements.forEach((el: Element) => observer.observe(el));
  }

  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }
}
