import { Args, Mutation, Query, Resolver, ID } from '@nestjs/graphql';
import { ProductType } from './product.type';
import { ProductService } from './product.service';
import { UpdateProductInput } from './dto/update-product.input';
import { CreateProductInput } from './dto/create-product.input';

@Resolver((of) => ProductType)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query((returns) => [ProductType])
  async products(): Promise<ProductType[]> {
    return this.productService.products();
  }

  @Query((returns) => ProductType)
  async product(@Args('id') id: string): Promise<ProductType> {
    return this.productService.product({ id });
  }

  @Mutation((returns) => ProductType)
  async createProduct(
    @Args('input') input: CreateProductInput,
  ): Promise<ProductType> {
    return this.productService.createProduct(input);
  }

  @Mutation((returns) => ProductType)
  async updateProduct(
    @Args('id') id: string,
    @Args('input') input: UpdateProductInput,
  ): Promise<ProductType> {
    return this.productService.updateProduct(id, input);
  }

  @Mutation((returns) => ProductType)
  async deleteProduct(@Args('id') id: string): Promise<ProductType> {
    return this.productService.deleteProduct(id);
  }
}
