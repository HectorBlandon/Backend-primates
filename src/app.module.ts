/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoController } from './producto/producto.controller';
import { ProductoService } from './services/producto-service/producto-service.service';
import { Producto } from './models/producto-modelo.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { CiudadModule } from './ciudad/ciudad.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-52-1-20-236.compute-1.amazonaws.com',
      port: 5432,
      username: 'vwzpdnljxybjrx',
      password: '0b855792d4813be0c8221ab35e3ce75dc7af5f6b7a4e29a86521715cb37e1b66',
      database: 'd4l8r8642opmlg',
      entities: ['dist/**/*.entity{.ts,.js}'],
      ssl: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Producto]),
    CategoriaModule,
    CiudadModule,
  ],
  controllers: [AppController, ProductoController],
  providers: [AppService, ProductoService],
})
export class AppModule {}
