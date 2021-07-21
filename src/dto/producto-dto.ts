import { Categoria } from '../categoria/entities/categoria.entity';
export class ProductoDto {
  
  nombre_producto: string;
  descripcion: string;
  marca: string;
  cantidad: number;
  precio: number;
  sku: string;
  activo: string;
  categoriaEntity: Categoria;
}
