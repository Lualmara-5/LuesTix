import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {

  private readonly navbarHeight = 30;

  scrollToSection(section: string): void {

    if (section === 'hero') {

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      return;
    }

    const element = document.getElementById(section);

    if (!element) return;

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      this.navbarHeight;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  }
}