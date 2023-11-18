import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from '../product.service';
import { Product } from '../product.entity';

@Controller('/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async products(): Promise<Product[]> {
    return this.productService.products();
  }

  @Get('/:id')
  async product(@Param(':id') id: string): Promise<Product> {
    return this.productService.product(id);
  }

  @Post()
  async createProduct(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('status') status: string,
  ): Promise<Product> {
    return this.productService.create(name, price, status);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('status') status: string,
  ): Promise<Product> {
    return this.productService.update({ id }, name, price, status);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<Product> {
    return this.productService.delete({ id });
  }
}
