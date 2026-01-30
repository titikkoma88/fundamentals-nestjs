import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'products',
})
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        type: 'text',
        nullable: true
    })
    description: string;

    @Column('decimal')
    price: number;

    @Column('int')
    stock: number;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp'
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp'
    })
    updatedAt: Date;

    @DeleteDateColumn({
        name: 'deleted_at',
        type: 'timestamp'
    })
    deletedAt: Date;
}