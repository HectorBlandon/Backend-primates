// import moment from 'moment';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  // BeforeInsert,
  // BeforeUpdate,
} from 'typeorm';
// import { Base } from './base'; extends Base

@Entity()
export class ProductoModelo {
  @PrimaryGeneratedColumn()
  public id_producto: number;

  @Column()
  public activo: boolean;

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

  // @BeforeInsert()
  // public async createDetails(): Promise<void> {
  //   this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
  // }

  // @BeforeUpdate()
  // public async updateDetails(): Promise<void> {
  //   this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
  // }
}
