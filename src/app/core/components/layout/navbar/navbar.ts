import { Component } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';
import { SectionObserverService } from '../../../services/section-observer.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor(
    private scrollService: ScrollService,
    public sectionObserver: SectionObserverService
  ) {}

  scrollToSection(section: string): void {
    this.scrollService.scrollToSection(section);
  }
}