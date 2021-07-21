/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
export class Base {
  //   @Exclude()
  @Column({ name: 'created_by' })
  public createdBy: number;

  @CreateDateColumn()
  public createdDate: string;

  /*   @Exclude()*/
  @Column({ name: 'modified_by' })
  public modifiedBy: number;

  // @Exclude()
  @UpdateDateColumn()
  public modifiedDate: string;
}
