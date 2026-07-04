import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements AfterViewInit {

  activeSection = 'hero';

  scrollTo(section: string): void {

    if (section === 'hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      return;
    }

    const element = document.getElementById(section);

    if (!element) return;
      const navbarHeight = 30;

    const y =
      element.getBoundingClientRect().top +  //Lo que falta por llegar 
      window.pageYOffset -                   // Me dice donde estoy - Cuanto he bajado
      navbarHeight;                          // Respira - No queda pegado arriba

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
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