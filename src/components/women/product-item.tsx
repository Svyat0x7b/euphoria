import React from 'react';
import { ProductType } from './product-list';
import heart from '../../assets/heart.svg';
import cart from '../../assets/cart.svg';
import { useAppDispatch } from '../../redux/hooks';
import { addToCart } from '../../redux/cart/cart-slice';

type ProductItemPropsType = {
    product: ProductType;
};

const ProductItem: React.FC<ProductItemPropsType> = ({ product }) => {
    const { id, title, brand, price, img } = product;
    const dispatch = useAppDispatch();
    return (
        <div>
            <div className="w-[280px] h-[370px] relative">
                <img src={img} alt={title} className="w-[100%] h-[100%] object-contain" />
                <button className="absolute top-6 right-6 bg-white rounded-md p-3">
                    <img src={heart} alt="heart" />
                </button>
            </div>
            <div className="mt-[30px] flex justify-between items-center">
                <div>
                    <h1 className="text-[16px] text-[#3C4242] font-[600]">{title}</h1>
                    <p className="text-[14px] text-[#807D7E] font=[500]">{brand}`s Brand</p>
                    <p className="text-[18px] font-[700] text-[#3C4242]">
                        {price}
                        <span>$</span>
                    </p>
                </div>
                <button
                    onClick={() => dispatch(addToCart(product))}
                    className="border-[2px] border-[#3C4242] p-3 bg-white rounded-md">
                    <img src={cart} alt="cart" />
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
