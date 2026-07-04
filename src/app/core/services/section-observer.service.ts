import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SectionObserverService {

  readonly activeSection = signal('hero');

  private observer?: IntersectionObserver;

  initObserver(): void {

    this.destroyObserver();

    const sections = document.querySelectorAll('section[id], footer[id]');

    if (sections.length === 0) {
        return;
    }

    this.observer = new IntersectionObserver(

      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },

      {
        threshold: 0.4,
      }

    );

    sections.forEach(section => {
      this.observer?.observe(section);
    });

  }

  destroyObserver(): void {
    this.observer?.disconnect();
    this.observer = undefined;
  }

}