import { Component } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
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
    private navigationService: NavigationService,
    public sectionObserver: SectionObserverService
  ) {}

  navigateToSection(section: string): void {
    this.navigationService.navigateToSection(section);
  }
}