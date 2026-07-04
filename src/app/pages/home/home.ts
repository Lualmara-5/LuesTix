import { AfterViewInit, Component, OnDestroy } from '@angular/core';

import { Hero } from '../../features/home/hero/hero';
import { Benefits } from '../../features/home/benefits/benefits';
import { Explore } from '../../features/home/explore/explore';
import { Doubts } from '../../features/home/doubts/doubts';
import { Footer } from '../../core/components/layout/footer/footer';

import { SectionObserverService } from '../../core/services/section-observer.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Benefits, Explore, Doubts, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit, OnDestroy {
  
  constructor(
    private sectionObserver: SectionObserverService
  ) {}

  ngAfterViewInit(): void {

    this.sectionObserver.initObserver();

  }

  ngOnDestroy(): void {

    this.sectionObserver.destroyObserver();

  }
}
