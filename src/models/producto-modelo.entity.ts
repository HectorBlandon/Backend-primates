/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
import { Categoria } from '../categoria/entities/categoria.entity';

@Entity('Producto')
export class Producto {
  @PrimaryGeneratedColumn()
  public id_producto: number;

  @Column({ type: 'varchar' })
  @IsNotEmpty()
  public nombre_producto: string;

  @Column({ type: 'varchar' })
  @IsNotEmpty()
  public descripcion: string;

  @Column({ type: 'varchar' })
  @IsNotEmpty()
  public marca: string;

  @Column({ type: 'integer' })
  @IsNotEmpty()
  public cantidad: number;

  @Column()
  @IsNotEmpty()
  public precio: number;

  @Column({ type: 'varchar' })
  @IsNotEmpty()
  public sku: string;

  @Column({ type: 'varchar' })
  @IsNotEmpty()
  public activo: string;

  @CreateDateColumn()
  public createdDate: string;

  @UpdateDateColumn()
  public modifiedDate: string;

  @ManyToOne(() => Categoria, (categoriaEntity) => categoriaEntity.id_categoria)
  // @IsNotEmpty()
  categoriaEntity: Categoria;
}
