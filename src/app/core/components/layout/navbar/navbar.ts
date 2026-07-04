import { Component, AfterViewInit } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements AfterViewInit {

  activeSection = 'hero';

  constructor(
    private scrollService: ScrollService
  ){}

  scrollToSection(section: string): void {
    this.scrollService.scrollToSection(section);
  }

  ngAfterViewInit(): void {

    const sections = document.querySelectorAll("section[id], footer[id]");
    const observer = new IntersectionObserver(

      (entries)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            this.activeSection = entry.target.id;
          }
        });
      },
      {
        threshold:0.4
      }
    );

    sections.forEach(section=>{
        observer.observe(section);
    });
  }
}