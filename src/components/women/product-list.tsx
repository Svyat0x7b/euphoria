import React from 'react';
import ProductItem from './product-item';
import p1 from '../../assets/products/p1.png';
import p2 from '../../assets/products/p2.png';

export type ProductType = {
    id: string;
    title: string;
    brand: string;
    price: number;
    img: string;
    size: string;
    color: string;
};

const PRODUCTS: ProductType[] = [
    {
        id: 'p1',
        title: 'Black Sweatshirt',
        brand: 'Nike',
        price: 59.99,
        img: p1,
        size: 'L',
        color: 'yellow',
    },
    {
        id: 'p2',
        title: 'White T-shirt',
        brand: 'Adidas',
        price: 64.99,
        img: p2,
        size: 'M',
        color: 'black',
    },
    {
        id: 'p3',
        title: 'Yellow Sweatshirt',
        brand: 'Nike',
        price: 59.99,
        img: p1,
        size: 'L',
        color: 'yellow',
    },
    {
        id: 'p4',
        title: 'Green T-shirt',
        brand: 'Adidas',
        price: 64.99,
        img: p2,
        size: 'S',
        color: 'green',
    },
];

const ProductList = () => {
    return (
        <section className="pt-[50px] pl-[50px]">
            <h1 className="mb-[50px] text-[22px] font-[600] text-[#3F4646]">Women Clothing</h1>
            <ul className="grid grid-cols-3 gap-x-[24px] gap-y-[50px]">
                {PRODUCTS.map((product) => (
                    <ProductItem product={product} />
                ))}
            </ul>
        </section>
    );
};

export default ProductList;
