import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { ImageType } from './image.type';
import { ImageService } from './image.service';
import { CreateImageInput } from './dto/create-image.input';
import { UpdateImageInput } from './dto/update-image.input';

@Resolver((of) => ImageType)
export class ImageResolver {
  constructor(private imageService: ImageService) {}

  @Query((returns) => [ImageType])
  async images(): Promise<ImageType[]> {
    return this.imageService.images();
  }

  @Query((returns) => ImageType)
  async image(@Args('id') id: string): Promise<ImageType> {
    return this.imageService.image({ id });
  }

  @Mutation((returns) => ImageType)
  async createImage(
    @Args('input') @Args('input') input: CreateImageInput,
  ): Promise<ImageType> {
    return this.imageService.createImage(input);
  }

  @Mutation((returns) => ImageType)
  updateImage(
    @Args('id') id: string,
    @Args('input') input: UpdateImageInput,
  ): Promise<ImageType> {
    return this.imageService.updateImage({ id }, input);
  }

  @Mutation((returns) => ImageType)
  deleteImage(@Args('id') id: string): Promise<ImageType> {
    return this.imageService.deleteImage({ id });
  }
}
