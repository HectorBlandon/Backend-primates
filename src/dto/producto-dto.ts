import { Categoria } from '../categoria/entities/categoria.entity';
export class ProductoDto {
  readonly nombre_producto: string;
  readonly descripcion: string;
  readonly marca: string;
  readonly cantidad: number;
  readonly precio: number;
  readonly sku: string;
  readonly activo: string;
  readonly categoriaEntity: Categoria;
}
