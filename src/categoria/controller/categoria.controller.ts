import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put } from '@nestjs/common';
import { CategoriaDto } from '../dto/categoria.dto';
import { CategoriaService } from '../services/categoria.service';


@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) { }

  /**
   * Controlador encargado de crear una categoria
   * @param response 
   * @param createCategoriaDto 
   */
  @Post('crear-categoria')
  crearCategoria(@Body() createCategoriaDto: CategoriaDto, @Res() response) {
    console.log(createCategoriaDto);
    return this.categoriaService.crearCategoria(createCategoriaDto).then((categoria) => {
      response.status(HttpStatus.CREATED).json(categoria);
    }).catch(() => {
      response.status(HttpStatus.FORBIDDEN).json({
        timestamp: new Date,
        status: 403,
        error: "Forbidden",
        mensaje: 'Error en la creación de la categoria'
      });
    });
  }

  /**
   * Controlador encargado de listar las categorias
   * @param response 
   * @param id_categoria 
   */
  @Get('listar-categoria')
  listarCategorias(@Res() response) {
    this.categoriaService.listarCategorias().then((categoriaList) => {
      response.status(HttpStatus.OK).json(categoriaList);
    }).catch(() => {
      response.status(HttpStatus.FORBIDDEN).json({
        timestamp: new Date,
        status: 403,
        error: "Forbidden",
        mensaje: 'Error en listar las categoria'
      });
    });
  }

  /**
   * Controlador encargado de actualizar una categoria
   * @param response 
   * @param id_categoria 
   */
  @Put('actualizar-categoria')
  actualizarCategorias(@Body() actualizarCategoriaDto: CategoriaDto, @Res() response, @Param('id') id_categoria,) {
    return this.categoriaService.actualizarCategoria(id_categoria, actualizarCategoriaDto).then((categoriaActualizada) => {
      response.status(HttpStatus.OK).json(categoriaActualizada);
    }).catch(() => {
      response.status(HttpStatus.FORBIDDEN).json({
        mensaje: 'Error en la actualización de la lista de las categorias',
      });
    });;
  }

  /**
   * Controlador encargado de eliminar una categoria
   * @param response 
   * @param id_categoria 
   */
  @Delete('eliminar-categoria')
  eliminarCategorias(@Res() response, @Param('id_categoria') id_categoria: number) {
    this.categoriaService.eliminarCategoria(id_categoria).then((res) => {
      response.status(HttpStatus.OK).json(res);
    }).catch(() => {
      response
        .status(HttpStatus.FORBIDDEN)
        .json({ mensaje: 'No se pudo eliminar la categoria' });
    });
  }
}
