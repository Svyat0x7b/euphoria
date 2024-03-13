import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from '../women/product-item';
import { ProductType } from '../women/product-list';
import { Link } from 'react-router-dom';
import { API_DOMAIN } from '../../constants';

const FeaturedProducts = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [error, setError] = useState({ is: false, message: null });

    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            const res = await axios.get(`${API_DOMAIN}/api/v1/products/featured`);

            if (res.status < 200 || res.status > 299) {
                setError({ is: true, message: res.data.title || 'Response Error' });
                return;
            }

            setFeaturedProducts(res.data);
        };
        fetchFeaturedProducts();
    }, []);

    return (
        <section className="pt-[100px] pl-[100px]">
            <div className="flex gap-10 items-center">
                <div className="w-[6px] h-[30px] bg-[#8A33FD]"></div>
                <h1 className="text-[34px] font-[600] text-[#3C4242]">Featured Products</h1>
            </div>
            <ul className="mt-[70px] flex gap-[40px]">
                {featuredProducts.map((product: ProductType) => (
                    <ProductItem product={product} />
                ))}
            </ul>
        </section>
    );
};

export default FeaturedProducts;
