import { Entity, Column, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Image {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  url: string;

  @Column()
  priority: number;
}
