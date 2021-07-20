import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from '../entities/categoria.entity';
import { Repository } from 'typeorm';
import { CategoriaDto } from '../dto/categoria.dto';

@Injectable()
export class CategoriaService {

  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<CategoriaDto>) { }

  async listarCategorias(): Promise<CategoriaDto[]> {
    return await this.categoriaRepository.find();
  }

  async crearCategoria(categoria: CategoriaDto) {
    const nuevaCategoria = new Categoria();
    nuevaCategoria.nombre_categoria = categoria.nombre_categoria;
    nuevaCategoria.activo = categoria.activo;
    return this.categoriaRepository.save(nuevaCategoria);
  }

  async buscarCategoriaId(
    id_categoria: number,
    categoria: CategoriaDto,
  ): Promise<CategoriaDto> {
    const categoriaABuscar = await this.categoriaRepository.findOne(
      id_categoria,
    );

    return categoriaABuscar;
  }

  async actualizarCategoria(
    id_categoria: number,
    categoria: CategoriaDto,
  ): Promise<CategoriaDto> {
    const categoriaAModificar = await this.categoriaRepository.findOne(
      id_categoria,
    );
    categoriaAModificar.nombre_categoria = categoria.nombre_categoria;
    categoriaAModificar.activo = categoria.activo;

    return this.categoriaRepository.save(categoriaAModificar);
  }

  async eliminarCategoria(id_categoria: number): Promise<any> {
    return await this.categoriaRepository.delete(id_categoria);
  }

}
