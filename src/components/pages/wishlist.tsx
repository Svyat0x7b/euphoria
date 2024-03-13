import React from 'react';
import { ProductType } from '../women/product-list';
import { heart } from '../../assets';
import { useAppSelector } from '../../redux/hooks';
import { selectWishlist } from '../../redux/wishlist/wishlist-slice';

type WishlistItemPropsType = {
    product: ProductType;
};

const WishlistItem: React.FC<WishlistItemPropsType> = ({ product }) => {
    const sizes = Object.keys(product.sizes);
    return (
        <li className="flex gap-[36px] border-b-[1px] border-solid-[#EDEEF2] py-[30px]">
            <button>X</button>
            <div className="w-[110px] h-[110px] object-contain">
                <img src={product.img[0]} alt={product.title} className="w-[100%] h-[100%]" />
            </div>
            <div className="w-full flex justify-between items-center">
                <div>
                    <h2 className="text-[18px] font-[700] text-[#3C4242]">{product.title}</h2>
                    <p>
                        <span className="text-[18px] font-[700] text-[#3C4242]">Color:</span>{' '}
                        {product.colors}
                    </p>
                    <p>
                        <span className="text-[18px] font-[700] text-[#3C4242]">Size:</span>{' '}
                        {sizes[0]}
                    </p>
                </div>
                <div>
                    <span className="text-[18px] font-[700]">${product.price.toFixed(2)}</span>
                </div>
                <button className="text-[18px] font-[500] text-[#fff] px-[24px] py-[12px] bg-[#8A33FD] rounded-[8px]">
                    Add to Cart
                </button>
            </div>
        </li>
    );
};

const Wishlist = () => {
    const items = useAppSelector(selectWishlist);
    return (
        <section className="text-[#807D7E] w-full">
            <h1 className="text-[28px] font-[600] text-[#3C4242]">Wishlist</h1>
            {items.length > 0 ? (
                <ul>
                    {items.map((product: ProductType) => (
                        <WishlistItem product={product} />
                    ))}
                </ul>
            ) : (
                <div className="flex flex-col gap-[50px] items-center border-[2px] rounded-[8px] py-[100px]">
                    <div className="rounded-full bg-[#F0F9F4] p-[25px]">
                        <img src={heart} alt="heart" />
                    </div>
                    <div className="text-center">
                        <h1 className="text-[34px] font-[600] text-[#3C4242]">
                            Your wishlist is Empty!
                        </h1>
                        <p className="text-[16px] font-[500] text-[#807D7E] mb-[40px]">
                            Add some items that you want to buy. Dreams come true. Remmeber that.
                        </p>
                        <button className="px-[48px] py-[12px] bg-[#8A33FD] rounded-[8px] text-white text-[18px] font-[600]">
                            Continue Shopping
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Wishlist;
