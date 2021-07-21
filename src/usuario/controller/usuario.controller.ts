import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { UsuarioDto } from '../dto/usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';


@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  /**
   * Controlador encargado de crear un usuario
   * @param response 
   * @param id_categoria 
   */
  @Post('crear-usuario')
  crearUsuario(@Body() createUsuarioDto: UsuarioDto,  @Res() response) {
    console.log(createUsuarioDto);
    return this.usuarioService.crearUsuarioService(createUsuarioDto).then((result) => {
      response.status(HttpStatus.CREATED).json(result)      ;
    }).catch((err) => {

      response.status(HttpStatus.FORBIDDEN).json({
        timestamp: new Date,
        status: 403,
        error: "Forbidden",
        mensaje: 'Error en la creación del usuario'
      });
      
    });
  }

  /**
   * Controlador encargado de listar los usuarios
   * @param response 
   * @param id_categoria 
   */
  @Get('listar-usuario')
  listarUSuarios(@Res() response) {

    this.usuarioService.listarUsuarioService().then((resultList) => {
      
      response.status(HttpStatus.OK).json(resultList);      

    }).catch((err) => {
      response.status(HttpStatus.FORBIDDEN).json({
        timestamp: new Date,
        status: 403,
        error: "Forbidden",
        mensaje: 'Error en listar los usuarios'
      });      
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
