import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput {
  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  status: string;
}
