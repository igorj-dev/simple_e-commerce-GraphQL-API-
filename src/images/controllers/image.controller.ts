import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common/decorators';
import { ImageService } from '../image.service';
import { Image } from '../image.entity';

@Controller('/images')
export class ImageController {
  constructor(private imageService: ImageService) {}

  @Get()
  async images(): Promise<Image[]> {
    return this.imageService.images();
  }

  @Get('/:id')
  async image(@Param(':id') id: string): Promise<Image> {
    return this.imageService.image(id);
  }

  @Post()
  async createImage(
    @Body('url') url: string,
    @Body('priority') priority: number,
  ): Promise<Image> {
    return this.imageService.create(url, priority);
  }

  @Patch(':id')
  async updateImage(
    @Param('id') id: string,
    @Body('url') url: string,
    @Body('priority') priority: number,
  ): Promise<Image> {
    return this.imageService.update({ id }, url, priority);
  }

  @Delete(':id')
  async deleteImage(@Param('id') id: string): Promise<Image> {
    return this.imageService.delete({ id });
  }
}
