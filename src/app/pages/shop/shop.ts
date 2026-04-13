import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Filters, FilterState } from './filters/filters';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, Filters],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  selectedSort = '';
  activeFilters: FilterState = { categories: [], sizes: [] };

  onSortChange(select: HTMLSelectElement) {
    this.selectedSort = select.value;
    select.blur();
  }

  onFiltersChanged(filters: FilterState) {
    this.activeFilters = filters;
    // aquí se llamará al servicio de productos cuando exista
  }
}