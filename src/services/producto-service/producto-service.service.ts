import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/models/producto-modelo.entity';
import { Repository } from 'typeorm';
import { ProductoDto } from '../../dto/producto-dto';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<ProductoDto>) {}
  async listarProductos(): Promise<ProductoDto[]> {
    return await this.productoRepository.find();
  }

  async crearProducto(producto: ProductoDto) {

    console.log('data que llega al servicio', producto);

    const nuevoProducto = new Producto();
    nuevoProducto.nombre_producto = producto.nombre_producto;    
    nuevoProducto.descripcion = producto.descripcion;    
    nuevoProducto.marca = producto.marca;
    nuevoProducto.cantidad = producto.cantidad;    
    nuevoProducto.precio = producto.precio;
    nuevoProducto.sku = producto.sku;
    nuevoProducto.activo = producto.activo;
    console.log('data', nuevoProducto);  
    nuevoProducto.categoriaEntity = producto.categoriaEntity;
    
    console.log('data que se envia a la DB', nuevoProducto);    

    return this.productoRepository.save(nuevoProducto);
  }
  async actualizarProducto(
    id_producto: number,
    producto: ProductoDto,
  ): Promise<ProductoDto> {
    const productoAModificar = await this.productoRepository.findOne(
      id_producto,
    );
    productoAModificar.nombre_producto = producto.nombre_producto;
    productoAModificar.cantidad = producto.cantidad;
    productoAModificar.descripcion = producto.descripcion;

    return this.productoRepository.save(productoAModificar);
  }
  async eliminarProducto(id_producto: number): Promise<any> {
    return await this.productoRepository.delete(id_producto);
  }
}
