/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ProductoDto } from 'src/dto/producto-dto';
import { ProductoService } from '../services/producto-service/producto-service.service';

@Controller('producto')
export class ProductoController {
  constructor(private productoService: ProductoService) {}

  /**
   * Controlador encargado de crear un producto
   * @param response 
   * @param id_categoria 
   */
  @Post('crear-producto')
  crearProducto(@Body() productoModelo: ProductoDto, @Res() response) {
    console.log(productoModelo);
    return this.productoService
      .crearProducto(productoModelo)
      .then((producto) => {
        response.status(HttpStatus.CREATED).json(producto);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'Error en la creación del producto' });
      });
  }

  /**
   * Controlador encargado de listar los productos
   * @param response 
   * @param id_categoria 
   */
  @Get()
  listarProductos(@Res() response) {
    this.productoService
      .listarProductos()
      .then((resultadoList) => {
        response.status(HttpStatus.OK).json(resultadoList);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'Error en la obtencion de la lista de produstos' });
      });
  }

  /**
   * Controlador encargado de actualizar un producto
   * @param response 
   * @param id_categoria 
   */
  @Put(':id')
  actualizar(
    @Body() productoDTO: ProductoDto,
    @Res() response,
    @Param('id') id_producto,
  ) {
    this.productoService
      .actualizarProducto(id_producto, productoDTO)
      .then((productoActualizado) => {
        response.status(HttpStatus.OK).json(productoActualizado);
      })
      .catch(() => {
        response.status(HttpStatus.FORBIDDEN).json({
          mensaje: 'Error en la actualización de la lista de produstos',
        });
      });
  }

  /**
   * Controlador encargado de eliminar un producto
   * @param response 
   * @param id_categoria 
   */
  @Delete(':id')
  eliminarProducto(@Res() response, @Param('id') id_producto) {
    this.productoService
      .eliminarProducto(id_producto)
      .then((res) => {
        response.status(HttpStatus.OK).json(res);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'No se pudo eliminar el producto' });
      });
  }
}
