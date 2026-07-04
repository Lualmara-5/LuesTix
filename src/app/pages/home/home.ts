import { Component } from '@angular/core';
import { Navbar } from '../../core/components/layout/navbar/navbar';
import { Hero } from '../../features/home/hero/hero';
import { Benefits } from '../../features/home/benefits/benefits';
import { Explore } from '../../features/home/explore/explore';
import { Doubts } from '../../features/home/doubts/doubts';
import { Footer } from '../../core/components/layout/footer/footer';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Hero, Benefits, Explore, Doubts, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
