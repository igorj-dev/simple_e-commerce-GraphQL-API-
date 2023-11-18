import { Entity, Column, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Product {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  status: string;
}
