import { Column } from 'typeorm';
export class Base {
  //   @Exclude()
  @Column({ name: 'created_by' })
  public createdBy: number;

  @Column({ name: 'created_date' })
  public createdDate: string;

  /*   @Exclude()*/
  @Column({ name: 'modified_by' })
  public modifiedBy: number;

  // @Exclude()
  @Column({ name: 'modified_date' })
  public modifiedDate: string;
}
