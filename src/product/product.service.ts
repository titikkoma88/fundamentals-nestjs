import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly repository: Repository<Product>
    ) {}

    public getProductList(): string[] {
        return ['Product 1', 'Product 2', 'Product 3']
    }

    public createProduct(data: CreateProductDto): object {
        return {
            name: data.name,
            price: data.price,
            description: data.description,
            stock: data.stock,
        };
    }
}
