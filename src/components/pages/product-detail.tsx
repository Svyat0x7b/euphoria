import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
    cartWhite,
    comment,
    creditCard,
    returnIcon,
    shirtIcon,
    starIcon,
    truckIcon,
    userIcon,
} from '../../assets/product';
import ProductGallery from '../product-gallery/product-gallery';
import { ProductType } from '../women/product-list';
import { NotFound } from '../partials';
import FeedbackSection from '../feedback/feedback-section';
import { API_DOMAIN } from '../../constants';

const COLORS: any = {
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
    grey: 'bg-slate-500',
    black: 'bg-slate-700',
    red: 'bg-red-500',
};

const ProductDetail = () => {
    const { productId } = useParams();
    const [fetchedProduct, setFetchedProduct] = useState<ProductType | null>(null);
    const [activeSize, setActiveSize] = useState(0);
    const [activeColor, setActiveColor] = useState(0);
    const [error, setError] = useState({ is: false, message: '' });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`${API_DOMAIN}/api/v1/products/${productId}`);

                if (res.status >= 200 && res.status <= 299) {
                    setFetchedProduct(res.data);
                } else {
                    setError({ is: true, message: res.data.message || 'Something went wrong!' });
                }
            } catch (err: any) {
                setError({
                    is: true,
                    message: err.response.data.message || 'Something went wrong!',
                });
            }
        };

        fetchProduct();
    }, [productId]);
    if (error.is) {
        return <NotFound message={error.message} />;
    }

    if (!fetchedProduct) {
        return <p className="text-center h-[80vh] pt-[300px] text-[20px] font-[600]">Loading...</p>;
    }

    return (
        <section className="w-full text-[#3C4242]">
            <div className="flex items-center w-full ">
                <ProductGallery items={fetchedProduct.img} />
                <div className="w-1/2 px-[70px] py-[40px]">
                    <h1 className="text-[34px] font-[800] mb-[35px]">{fetchedProduct.title}</h1>
                    <div className="flex items-center gap-5 mb-[35px]">
                        <div className="flex gap-3 items-center">
                            <ul className="flex gap-2 items-center">
                                <li className="w-full h-full object-contain">
                                    <img src={starIcon} alt="start" className="w-[22px] h-[22px]" />
                                </li>
                                <li className="w-full h-full object-contain">
                                    <img src={starIcon} alt="start" className="w-[22px] h-[22px]" />
                                </li>
                                <li className="w-full h-full object-contain">
                                    <img src={starIcon} alt="start" className="w-[22px] h-[22px]" />
                                </li>
                                <li className="w-full h-full object-contain">
                                    <img src={starIcon} alt="start" className="w-[22px] h-[22px]" />
                                </li>
                                <li className="w-full h-full object-contain">
                                    <img src={starIcon} alt="start" className="w-[22px] h-[22px]" />
                                </li>
                            </ul>
                            <span className="text-[16px] font-[600] text-[#807D7E]">
                                {fetchedProduct.rating}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={comment} alt="comment" />
                            </div>
                            <span className="text-[16px] font-[600] text-[#807D7E]">120</span>
                        </div>
                    </div>
                    <div className="mb-[35px]">
                        <h1 className="mb-[25px] text-[18px] font-[700]">Select Size</h1>
                        <ul className="flex items-center gap-[20px]">
                            {fetchedProduct.sizes.map((size: string, idx: number) => (
                                <li>
                                    <button
                                        onClick={() => setActiveSize(idx)}
                                        className={`w-[40px] h-[40px] ${
                                            idx === activeSize
                                                ? 'bg-[#2a2a2a] text-[#fff]'
                                                : 'bg-transparent'
                                        } border-[2px] border-[#2a2a2a] rounded-md hover:bg-[#2a2a2a] hover:text-[#fff]`}>
                                        {size}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-[35px]">
                        <h1 className="mb-[25px] text-[18px] font-[700]">Colors available</h1>
                        <ul className="flex items-center gap-5">
                            {fetchedProduct.colors.map((color: string, idx: number) => (
                                <li>
                                    <button
                                        onClick={() => setActiveColor(idx)}
                                        className={`w-[25px] h-[25px] border-[3px] rounded-full hover:border-[3px] ${
                                            COLORS[color]
                                        } ${
                                            idx === activeColor ? 'border-[#000]' : 'border-[#fff]'
                                        }`}></button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center gap-[40px]">
                        <button className="bg-[#8A33FD] py-[12px] px-[35px] text-[#fff] font-[800] rounded-[15px] flex items-center gap-2 hover:bg-[#7c39d2]">
                            <div>
                                <img src={cartWhite} alt="cart" />
                            </div>
                            Add to Cart
                        </button>
                        <div className="bg-[#fff] border-[1px] border-[#2a2a2a] py-[12px] px-[35px] text-[#000] font-[800] rounded-[15px]">
                            ${fetchedProduct.price.toFixed(2)}
                        </div>
                    </div>
                    <div className="w-full h-[2px] bg-slate-500 rounded-md my-[35px]"></div>
                    <div className="grid grid-cols-2 gap-x-[68px] gap-y-[25px]">
                        <div className="flex items-center gap-2">
                            <div className="bg-slate-200 p-3 rounded-full">
                                <img src={creditCard} alt="feature icon" />
                            </div>
                            <p className="text-[18px] font-[600]">Secure Payment</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-slate-200 p-3 rounded-full">
                                <img src={shirtIcon} alt="feature icon" />
                            </div>
                            <p className="text-[18px] font-[600]">Size & Fit</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-slate-200 p-3 rounded-full">
                                <img src={truckIcon} alt="feature icon" />
                            </div>
                            <p className="text-[18px] font-[600]">Free Shipping</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-slate-200 p-3 rounded-full">
                                <img src={returnIcon} alt="feature icon" />
                            </div>
                            <p className="text-[18px] font-[600]">Polite Returns</p>
                        </div>
                    </div>
                </div>
            </div>
            <FeedbackSection id={fetchedProduct.id} />
        </section>
    );
};

export default ProductDetail;
