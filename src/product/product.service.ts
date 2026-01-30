import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
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
