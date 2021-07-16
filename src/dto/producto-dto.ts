export class ProductoDto {
  readonly nombre_producto: string;
  readonly descripcion: string;
  readonly marca: string;
  readonly cantidad: number;
  readonly precio: number;
  readonly sku: string;
  readonly activo: boolean;
  // readonly createdBy: number;
  readonly createdDate: string;
  // readonly modifiedBy: number;
  readonly modifiedDate: string;
}
