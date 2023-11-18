import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Product')
export class ProductType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  status: string;
}
