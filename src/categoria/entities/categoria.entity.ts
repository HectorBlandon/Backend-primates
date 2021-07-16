import { Producto } from '../../models/producto-modelo.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column, CreateDateColumn, UpdateDateColumn,OneToMany// BeforeInsert, // BeforeUpdate,
} from 'typeorm';

@Entity()
export class Categoria {

    @PrimaryGeneratedColumn()
    public id_categoria: number;

    @Column({type: 'varchar', length: 12})
    public nombre_categoria: string;

    @Column({type: 'varchar'})
    public activo: string;

    @Column({type: 'decimal'})
    public orden: number;

    @CreateDateColumn()
    public createDate: string;

  @UpdateDateColumn()
    public modifiedDate: string; 

    @OneToMany(() => Producto, (productoModelo) => productoModelo.id_producto)
    productoModelo: Producto[];

    // @BeforeInsert()
  // public async createDetails(): Promise<void> {
  //   this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
  // }

  // @BeforeUpdate()
  // public async updateDetails(): Promise<void> {
  //   this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
  // }
}
