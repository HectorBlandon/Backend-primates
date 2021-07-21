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
      host: 'ec2-54-147-93-73.compute-1.amazonaws.com',
      port: 5432,
      username: 'rcectgcetgrrkm',
      password: '91855ff1660f82edfb255de47fdd633d19a647d989cae16ba25622dfbd19480c',
      database: 'd84tvv5duksllv',
      entities: ['dist/**/*.entity{.ts,.js}'],
      ssl: { rejectUnauthorized: false },
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
