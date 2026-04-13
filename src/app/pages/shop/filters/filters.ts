import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FilterState {
  categories: string[];
  sizes: string[];
}

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters.html',
  styleUrl: './filters.css',
  host: {
    class: 'filters',
    role: 'aside',
  }
})
export class Filters {

  @Output() filtersChanged = new EventEmitter<FilterState>();

  categories = [
    { label: 'Hombre', value: 'hombre' },
    { label: 'Mujer',  value: 'mujer'  },
    { label: 'Mixto',  value: 'mixto'  },
  ];

  sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  selectedCategories = new Set<string>();
  selectedSizes      = new Set<string>();

  filtersOpen = false;
  openGroups: Record<string, boolean> = { categoria: true, talla: true };

  // Categorías
  toggleCategory(value: string) {
    this.selectedCategories.has(value)
      ? this.selectedCategories.delete(value)
      : this.selectedCategories.add(value);
    this.emit();
  }

  isSelectedCategory(value: string): boolean {
    return this.selectedCategories.has(value);
  }

  // Tallas
  toggleSize(size: string) {
    this.selectedSizes.has(size)
      ? this.selectedSizes.delete(size)
      : this.selectedSizes.add(size);
    this.emit();
  }

  isSelectedSize(size: string): boolean {
    return this.selectedSizes.has(size);
  }

  // Acordeón
  toggleGroup(key: string) {
    this.openGroups[key] = !this.openGroups[key];
  }

  // Emite el estado actual — shop.ts lo va a recibir y cuando
  // haga el servicio de productos, lo usara para filtrar (espero...)
  private emit() {
    this.filtersChanged.emit({
      categories: [...this.selectedCategories],
      sizes:      [...this.selectedSizes],
    });
  }
}