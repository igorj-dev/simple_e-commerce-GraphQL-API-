import { Module } from '@nestjs/common';
import { ProductsModule } from './products/product.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/product.entity';
import { ImageModule } from './images/image.module';
import { Image } from './images/image.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://igor:12345@cluster0.ech1ahe.mongodb.net/?retryWrites=true&w=majority',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Product, Image],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    ProductsModule,
    ImageModule,
  ],
})
export class AppModule {}
