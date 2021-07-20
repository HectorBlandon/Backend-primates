import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from './controller/categoria.controller';
import { CategoriaService } from './services/categoria.service';
import { Categoria } from './entities/categoria.entity';

@Module({
  controllers: [CategoriaController],
  providers: [CategoriaService],
  imports: [TypeOrmModule.forFeature([Categoria])],
})
export class CategoriaModule {}
