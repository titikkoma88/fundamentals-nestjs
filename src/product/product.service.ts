import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { DeepPartial, Repository } from 'typeorm';
import { UpdateProductDto } from './dto/update-product.dto';

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

    public async updateProduct(id: number, data: UpdateProductDto): Promise<Product | null> {
        const product = await this.repository.findOne({
            where: {
                id
            }
        })
        if (!product) {
            throw new NotFoundException('Product not found');
        }

        await this.repository.update(id, data);
        return this.repository.findOne({
            where: {
                id
            }
        })
    }

    public async deleteProduct(id: number): Promise<string> {
        const product = await this.repository.findOne({
            where: {
                id
            }
        })
        if (!product) {
            throw new NotFoundException('Product not found');
        }

        await this.repository.softDelete(id);
        return 'Product deleted successfully'
    }
}
