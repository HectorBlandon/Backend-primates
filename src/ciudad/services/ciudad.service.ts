import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CiudadDto } from '../dto/ciudad.dto';
import { UpdateCiudadDto } from '../dto/update-ciudad.dto';
import { Ciudad } from '../entities/ciudad.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CiudadService {

  constructor(
    @InjectRepository(Ciudad)
    private readonly ciudadRepository: Repository<CiudadDto>,) { }

  async crearCiudad(ciudad: CiudadDto) {
    const nuevaCiudad = new Ciudad();
    nuevaCiudad.nombre_ciudad = ciudad.nombre_ciudad;
    nuevaCiudad.activo = ciudad.activo;
    return this.ciudadRepository.save(nuevaCiudad);
  }

  async listarCiudades(): Promise<CiudadDto[]> {
    return await this.ciudadRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ciudad`;
  }

  update(id: number, updateCiudadDto: UpdateCiudadDto) {
    return `This action updates a #${id} ciudad`;
  }

  remove(id: number) {
    return `This action removes a #${id} ciudad`;
  }
}
