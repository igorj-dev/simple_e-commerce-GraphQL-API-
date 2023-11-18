import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Product } from './product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async products(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async product(id): Promise<Product> {
    return this.productRepository.findOne(id);
  }

  async createProduct(input: CreateProductInput): Promise<Product> {
    const { name, price, status } = input;

    const product = this.productRepository.create({
      id: uuid(),
      name,
      price,
      status,
    });
    return this.productRepository.save(product);
  }

  async updateProduct(id, input: UpdateProductInput): Promise<Product> {
    const product = await this.productRepository.findOneByOrFail({ id });
    product.name = input.name;
    product.price = input.price;
    product.status = input.status;
    await this.productRepository.save(product);
    return product;
  }

  async deleteProduct(id): Promise<Product> {
    const product = await this.productRepository.findOneByOrFail({ id });
    this.productRepository.delete(product);
    return product;
  }

  async create(name, price, status): Promise<Product> {
    const product = this.productRepository.create({
      id: uuid(),
      name,
      price,
      status,
    });
    await this.productRepository.save(product);
    return product;
  }

  async update(id, name, price, status): Promise<Product> {
    const product = await this.productRepository.findOneOrFail(id);
    product.name = name;
    product.price = price;
    product.status = status;
    await this.productRepository.save(product);
    return product;
  }

  async delete(id): Promise<Product> {
    const product = await this.productRepository.findOneOrFail(id);
    this.productRepository.delete(product);
    return product;
  }
}
