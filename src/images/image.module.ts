import { Module } from '@nestjs/common';
import { ImageResolver } from './image.resolver';
import { ImageService } from './image.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './image.entity';
import { ImageController } from './controllers/image.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Image])],
  providers: [ImageResolver, ImageService],
  controllers: [ImageController],
})
export class ImageModule {}
