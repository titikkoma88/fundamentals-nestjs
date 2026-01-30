import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get('list')
    getProductList(): string[] {
        return this.productService.getProductList();
    }

    @Post()
    createProduct(@Body() data: CreateProductDto): object {
        return this.productService.createProduct(data);
    }
}
