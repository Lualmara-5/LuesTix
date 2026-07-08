import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyInputDirective } from '../../../shared/directives/currency-input.directive';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyInputDirective],
  templateUrl: './filters.html',
  styleUrl: './filters.css',
})
export class Filters {

  readonly PRECIO_MIN = 75000;
  readonly PRECIO_MAX = 500000;

  precioMinError = false;
  precioMaxError = false;

  mostrarFiltros = false;

  filtros = this.crearFiltrosIniciales();

  private crearFiltrosIniciales() {
    return {
      categoria: {
        hombre: false,
        mujer: false,
        unisex: false,
        combo: false
      },

      marcas: {
        jeanPaulGaultier: false,
        giorgioArmani: false,
        armaf: false,
        dior: false,
        creed: false
      },

      precio: {
        minimo: this.PRECIO_MIN,
        maximo: this.PRECIO_MAX
      }
    };
  }

  toggleFiltros() {
    if (window.innerWidth <= 768) {
      this.mostrarFiltros = !this.mostrarFiltros;
    }
  }

  esMovil(): boolean {
    return window.innerWidth <= 768;
  }

  quitarFoco(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.blur();
  }

  validarPrecio(tipo: 'minimo' | 'maximo'): void {

    if (tipo === 'minimo') {

      // Menor al mínimo permitido
      if (this.filtros.precio.minimo < this.PRECIO_MIN) {

        this.precioMinError = true;
        this.filtros.precio.minimo = this.PRECIO_MIN;

        setTimeout(() => {
          this.precioMinError = false;
        }, 2000);

        return;
      }

      // Mayor que el máximo seleccionado
      if (this.filtros.precio.minimo > this.filtros.precio.maximo) {

        this.precioMinError = true;
        this.filtros.precio.minimo = this.filtros.precio.maximo;

        setTimeout(() => {
          this.precioMinError = false;
        }, 2000);

        return;
      }
    }

    if (tipo === 'maximo') {

      // Mayor al máximo permitido
      if (this.filtros.precio.maximo > this.PRECIO_MAX) {

        this.precioMaxError = true;
        this.filtros.precio.maximo = this.PRECIO_MAX;

        setTimeout(() => {
          this.precioMaxError = false;
        }, 2000);

        return;
      }

      // Menor que el mínimo seleccionado
      if (this.filtros.precio.maximo < this.filtros.precio.minimo) {

        this.precioMaxError = true;
        this.filtros.precio.maximo = this.filtros.precio.minimo;

        setTimeout(() => {
          this.precioMaxError = false;
        }, 2000);

        return;
      }
    }
  }

  limpiarFiltros(): void {

    this.precioMinError = false;
    this.precioMaxError = false;

    this.filtros = this.crearFiltrosIniciales();
  }
}
