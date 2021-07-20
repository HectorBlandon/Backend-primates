import {
    Entity,
    PrimaryGeneratedColumn,
    Column, CreateDateColumn, UpdateDateColumn
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Ciudad {

    @PrimaryGeneratedColumn()
    public id_ciudad: number;

    @Column({ type: 'varchar', length: 12 })
    @IsNotEmpty()
    public nombre_ciudad: string;

    @Column({ type: 'varchar' })
    @IsNotEmpty()
    public activo: string;

    @CreateDateColumn()
    @IsNotEmpty()
    public createDate: string;

    @UpdateDateColumn()
    public modifiedDate: string;
}
