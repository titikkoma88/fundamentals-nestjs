import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entity/product.entity';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get('list')
    async getProductList(): Promise<Product[]> {
        return this.productService.getProductList();
    }

    @Get(':id')
    async getProductById(@Param('id') id: number): Promise<Product | null> {
        return await this.productService.getProductById(id);
    }

    @Post()
    async createProduct(@Body() data: CreateProductDto): Promise<Product> {
        return await this.productService.createProduct(data);
    }
}
