export interface Filtros {
  categorias: string[];

  marcas: string[];

  precio: {
    minimo: number;
    maximo: number;
  };
}