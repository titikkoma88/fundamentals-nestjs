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

    public async getProductList(): Promise<Product[]> {
        return await this.repository.find();
    }

    public async getProductById(id: number): Promise<Product | null> {
        return await this.repository.findOne({
            where: {
                id
            }
        })
    }

    public async createProduct(data: CreateProductDto): Promise<Product> {
        const product = this.repository.create(data);
        return await this.repository.save(product);
    }
}
