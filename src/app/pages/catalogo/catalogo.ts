import { Component } from '@angular/core';
import { Banner } from '../../features/catalogo/banner/banner';
import { Filters } from '../../features/catalogo/filters/filters';
import { Toolbar } from '../../features/catalogo/toolbar/toolbar';
import { ProductList } from '../../features/catalogo/product-list/product-list'; 

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [Banner, Filters, Toolbar, ProductList],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {

}
