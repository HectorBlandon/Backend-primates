import { Injectable } from '@nestjs/common';
import { UsuarioDto } from '../dto/usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import { Usuario } from '../entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<UsuarioDto>) { }

  /**
   * Servicio encargado de insertar un usuario en la BD
   * @param categoria
   * @returns objeto de tipo UsuarioDto
   */
  async crearUsuarioService(createUsuario: UsuarioDto) {

    console.log('usuario servicio', createUsuario);
    const nuevoUsuario = new Usuario();

    nuevoUsuario.primer_nombre = createUsuario.primer_nombre;
    nuevoUsuario.segundo_nombre = createUsuario.segundo_nombre;
    nuevoUsuario.primer_apellido = createUsuario.primer_apellido;
    nuevoUsuario.segundo_apellido = createUsuario.segundo_apellido;
    nuevoUsuario.username = createUsuario.username;
    nuevoUsuario.fecha_nacimiento = createUsuario.fecha_nacimiento;
    nuevoUsuario.genero = createUsuario.genero;
    nuevoUsuario.email = createUsuario.email;
    nuevoUsuario.mobile = createUsuario.mobile;
    nuevoUsuario.clave = createUsuario.clave;
    nuevoUsuario.rol = createUsuario.rol;

    console.log('usuario DB', nuevoUsuario);

    return await this.usuarioRepository.save(nuevoUsuario);
  }

  /**
   * Servicio encargado de consultar todos los usuarios de la BD
   * @returns lista de tipo UsuarioDto
   */
  async listarUsuarioService(): Promise<UsuarioDto[]> {
    return await this.usuarioRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
