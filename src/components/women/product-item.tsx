import React, { useState, useEffect } from 'react';
import { ProductType } from './product-list';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addToCart } from '../../redux/cart/cart-slice';
import {
    addToWishlist,
    removeFromWishlist,
    selectWishlist,
} from '../../redux/wishlist/wishlist-slice';
import { heart, cart } from '../../assets';
import { Link } from 'react-router-dom';

type ProductItemPropsType = {
    product: ProductType;
};

const ProductItem: React.FC<ProductItemPropsType> = ({ product }) => {
    const { id, title, brand, price, img } = product;
    const [isAddedToWishlist, setIsAddedToWishlist] = useState<Boolean>(false);
    const wishlistItems = useAppSelector(selectWishlist);
    const dispatch = useAppDispatch();

    const defineAddedItems = () => {
        const findItem = wishlistItems.find((item: ProductType) => item.id == id);

        if (findItem) {
            setIsAddedToWishlist(true);
        }
    };

    useEffect(() => {
        defineAddedItems();
    }, [isAddedToWishlist]);

    const addToWishlistHandler = () => {
        if (isAddedToWishlist) {
            dispatch(removeFromWishlist(product.id));
            setIsAddedToWishlist(false);
            return;
        }

        dispatch(addToWishlist(product));
        setIsAddedToWishlist(true);
    };
    return (
        <div>
            <div className="w-[280px] h-[370px] relative">
                <img src={img[0]} alt={title} className="w-[100%] h-[100%] object-contain" />
                <button
                    onClick={addToWishlistHandler}
                    className={`absolute top-6 right-6  rounded-md p-3  ${
                        isAddedToWishlist ? 'bg-[#8A33FD]' : 'bg-white'
                    }`}>
                    <img src={heart} alt="heart" />
                </button>
            </div>
            <div className="mt-[30px] flex justify-between items-center">
                <div>
                    <Link to={`/products/${id}`}>
                        <h1 className="text-[16px] text-[#3C4242] font-[600] hover:underline">
                            {title}
                        </h1>
                    </Link>
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
