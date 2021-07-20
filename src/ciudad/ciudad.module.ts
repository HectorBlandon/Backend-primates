import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadController } from './controller/ciudad.controller';
import { Ciudad } from './entities/ciudad.entity';
import { CiudadService } from './services/ciudad.service';

@Module({
  controllers: [CiudadController],
  providers: [CiudadService],
  imports: [TypeOrmModule.forFeature([Ciudad])],
})
export class CiudadModule {}
