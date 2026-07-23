import { Component, inject, Input } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Producto } from '../../../models/producto.interface';
import { Filtros } from '../../../models/filtros.interface';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  private productoService = inject(ProductoService);

  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  @Input()
  set filtros(valor: Filtros | null) {

    if (!valor) {
      this.productosFiltrados = this.productos;
      return;
    }

    this.aplicarFiltros(valor);
  }

  constructor() {
    this.productos = this.productoService.getProductos();
    this.productosFiltrados = this.productos;
  }

  private aplicarFiltros(filtros: Filtros): void {

    this.productosFiltrados = this.productos.filter(producto => {

      const coincideCategoria =
        filtros.categorias.length === 0 ||
        producto.categorias.some(categoria =>
          filtros.categorias.includes(categoria)
        );

      const coincideMarca =
        filtros.marcas.length === 0 ||
        producto.marcas.some(marca =>
          filtros.marcas.includes(marca)
        );

      const coincidePrecio =
        producto.precio >= filtros.precio.minimo &&
        producto.precio <= filtros.precio.maximo;

      return coincideCategoria && coincideMarca && coincidePrecio;
    });
  }
}
