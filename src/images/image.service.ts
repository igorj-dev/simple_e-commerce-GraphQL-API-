import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Image } from './image.entity';
import { CreateImageInput } from './dto/create-image.input';
import { UpdateImageInput } from './dto/update-image.input';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image) private imageRepository: Repository<Image>,
  ) {}

  async images(): Promise<Image[]> {
    return this.imageRepository.find();
  }

  async image(id): Promise<Image> {
    return this.imageRepository.findOneOrFail(id);
  }

  async createImage(input: CreateImageInput): Promise<Image> {
    const { url, priority } = input;
    const image = this.imageRepository.create({
      id: uuid(),
      url,
      priority,
    });
    await this.imageRepository.save(image);
    return image;
  }

  async updateImage(id, input: UpdateImageInput): Promise<Image> {
    const image = await this.imageRepository.findOneOrFail(id);
    image.url = input.url;
    image.priority = input.priority;
    await this.imageRepository.save(image);
    return image;
  }

  async deleteImage(id) {
    const image = await this.imageRepository.findOneOrFail(id);
    await this.imageRepository.delete(image);
    return image;
  }

  async create(url, priority): Promise<Image> {
    const image = this.imageRepository.create({
      id: uuid(),
      url,
      priority,
    });
    await this.imageRepository.save(image);
    return image;
  }

  async update(id, url, priority): Promise<Image> {
    const image = await this.imageRepository.findOneOrFail(id);
    image.url = url;
    image.priority = priority;
    await this.imageRepository.save(image);
    return image;
  }

  async delete(id): Promise<Image> {
    const image = await this.imageRepository.findOneOrFail(id);
    this.imageRepository.delete(image);
    return image;
  }
}
