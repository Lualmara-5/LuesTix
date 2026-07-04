import { Component } from '@angular/core';
import { Banner } from '../../features/catalogo/banner/banner';
import { Filters } from '../../features/catalogo/filters/filters';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [Banner, Filters],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {

}
