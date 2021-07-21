import {
    Entity,
    PrimaryGeneratedColumn,
    Column, CreateDateColumn, UpdateDateColumn,OneToMany
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    public id_usuario: number;

    @Column({type: 'varchar'})
    @IsNotEmpty()
    public primer_nombre: string;

    @Column({type: 'varchar'})
    public segundo_nombre: string;

    @Column({type: 'varchar'})
    @IsNotEmpty()
    public primer_apellido: string;

    @Column({type: 'varchar'})
    public segundo_apellido: string;

    @Column({type: 'varchar'})
    @IsNotEmpty()
    public username: string;

    @Column({type: 'varchar'})
    @IsNotEmpty()
    public fecha_nacimiento: string;

    @Column({type: 'varchar'})
    @IsNotEmpty()
    public genero: string;

    @Column({type: 'varchar'})
    @IsNotEmpty()
    public email: string;

    @Column({type: 'varchar'})
    @IsNotEmpty()
    public mobile: string;

    @Column({type: 'varchar'})
    @IsNotEmpty()
    public clave: string;

    @CreateDateColumn()
    public createDate: string;

    @UpdateDateColumn()
    public modifiedDate: string;

    @Column({type: 'varchar'})
    @IsNotEmpty()
    public rol: string;

    /*  
        Direcciones de entrega
        @OneToMany(() => Producto, (productoEntity) => productoEntity.id_producto)
        productoEntity: Producto[]; 
    */

    
}
