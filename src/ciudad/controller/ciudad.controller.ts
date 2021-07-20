import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { CiudadService } from '../services/ciudad.service';
import { CiudadDto } from '../dto/ciudad.dto';
import { UpdateCiudadDto } from '../dto/update-ciudad.dto';

@Controller('ciudad')
export class CiudadController {
  constructor(private readonly ciudadService: CiudadService) { }

  /**
   * Controlador encargado de crear una ciudad
   * @param response 
   * @param createCiudadDto 
   */
  @Post('crear-ciudad')
  create(@Body() createCiudadDto: CiudadDto, @Res() response) {
    console.log(createCiudadDto);
    return this.ciudadService.crearCiudad(createCiudadDto).then((ciudad) => {
      response.status(HttpStatus.CREATED).json(ciudad);
    }).catch(() => {
      response.status(HttpStatus.FORBIDDEN).json({
        timestamp: new Date,
        status: 403,
        error: "Forbidden",
        mensaje: 'Error en la creación de la ciudad'
      });
    });
  }

  /**
   * Controlador encargado de listar las ciudades
   * @param response 
   * @param id_categoria 
   */
  @Get('listar-ciudad')
  findAll(@Res() response) {
    this.ciudadService.listarCiudades().then((ciudadesList) => {
      response.status(HttpStatus.OK).json(ciudadesList);

    }).catch((err) => {
      response.status(HttpStatus.FORBIDDEN).json({
        timestamp: new Date,
        status: 403,
        error: err,
        mensaje: 'Error en listar las ciudades'
      });
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ciudadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCiudadDto: UpdateCiudadDto) {
    return this.ciudadService.update(+id, updateCiudadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ciudadService.remove(+id);
  }
}
