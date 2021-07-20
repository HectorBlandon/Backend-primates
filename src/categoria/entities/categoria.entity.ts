import { Producto } from '../../models/producto-modelo.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column, CreateDateColumn, UpdateDateColumn,OneToMany
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Categoria {

    @PrimaryGeneratedColumn()
    public id_categoria: number;

    @Column({type: 'varchar', length: 12})
    @IsNotEmpty()
    public nombre_categoria: string;

    @Column({type: 'varchar'})
    @IsNotEmpty()
    public activo: string;

    @CreateDateColumn()
    @IsNotEmpty()
    public createDate: string;

    @UpdateDateColumn()
    public modifiedDate: string; 

    @OneToMany(() => Producto, (productoModelo) => productoModelo.id_producto)
    productoModelo: Producto[];
}
