import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { ScrollService } from './scroll.service';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {

    private pendingSection?: string;

    constructor(
        private router: Router,
        private scrollService: ScrollService,
    ){

  this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    )

    .subscribe(() => {
    if (!this.pendingSection) {
        return;
    }

    this.scrollService.scrollToSection(this.pendingSection);
    this.pendingSection = undefined;
});

}
  navigateToSection(section: string): void {

    console.log('Ruta actual:', this.router.url);

    if (this.router.url === '/') {
      this.scrollService.scrollToSection(section);
      return;
    }

    this.pendingSection = section;
    this.router.navigate(['/']);
  }
}