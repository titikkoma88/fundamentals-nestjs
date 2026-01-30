import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    public getProductList(): string[] {
        return ['Product 1', 'Product 2', 'Product 3']
    }
}
