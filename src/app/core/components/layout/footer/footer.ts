import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

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
}
