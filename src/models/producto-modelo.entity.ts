// import moment from 'moment';
import {
  Entity,
  PrimaryGeneratedColumn, CreateDateColumn,
  UpdateDateColumn,
  Column, ManyToOne
  // BeforeInsert,
  // BeforeUpdate,
} from 'typeorm';
// import { Base } from './base'; extends Base
import { CategoriaDto } from '../categoria/dto/categoria.dto';
import { Categoria } from '../categoria/entities/categoria.entity';

@Entity('Producto')
export class Producto {
  @PrimaryGeneratedColumn()
  public id_producto: number;

  @Column()
  public nombre_producto: string;
  
  @Column()
  public descripcion: string;

  @Column()
  public marca: string;

  @Column()
  public cantidad: number;

  @Column()
  public precio: number;

  @Column()
  public sku: string;

  @Column()
  public activo: boolean;   

  @CreateDateColumn()
  public createdDate: string;

  @UpdateDateColumn()
  public modifiedDate: string;  

  // @BeforeInsert()
  // public async createDetails(): Promise<void> {
  //   this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
  // }

  // @BeforeUpdate()
  // public async updateDetails(): Promise<void> {
  //   this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
  // }

  @ManyToOne(() => Categoria, (categoriaEntity) => categoriaEntity.id_categoria)
  categoriaEntity: Categoria;
}
