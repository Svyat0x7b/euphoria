import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Filters, ProductList } from '../women';
import axios from 'axios';
import { API_DOMAIN } from '../../constants';

type ErrorType = {
    is: boolean;
    message: string;
};

const Women = () => {
    const location = useLocation();
    const [fetchedProducts, setFetchedProducts] = useState(null);
    const [actualEndpoint, setActualEndpoint] = useState(`${API_DOMAIN}/api/v1/products/women`);
    const [error, setError] = useState<ErrorType>({ is: false, message: '' });

    const applyFiltersHandler = (
        color: string,
        size: string,
        minPrice: string,
        maxPrice: string,
    ) => {
        let endpoint = `${API_DOMAIN}/api/v1/products/women`;
        let queryParams = [];

        if (color.length) {
            queryParams.push(`color=${color}`);
        }
        if (size.length) {
            queryParams.push(`size=${size}`);
        }
        if (minPrice.length) {
            queryParams.push(`priceFrom=${minPrice}`);
        }
        if (maxPrice.length) {
            queryParams.push(`priceTo=${maxPrice}`);
        }

        if (queryParams.length > 0) {
            endpoint += `?${queryParams.join('&')}`;
        }
        setActualEndpoint(endpoint);
    };

    // const applyFiltersFromQuery = () => {
    //     const params = new URLSearchParams(location.pathname.substring(1));
    //     colorparams.get('color')
    //     setSelectedSize(params.get('size') || '');
    //     setPriceRange({
    //         min: params.get('priceFrom') || '',
    //         max: params.get('priceTo') || '',
    //     });
    // }

    useEffect(() => {
        const fetchProducts = async () => {
            console.log(actualEndpoint);
            try {
                const res = await axios.get(actualEndpoint);

                if (res.status < 200 || res.status > 299) {
                    setError({ is: true, message: res.data.title });
                    return;
                }

                setFetchedProducts(res.data);
            } catch (err) {
                setError({ is: true, message: err as string });
                return;
            }
        };
        fetchProducts();
    }, [actualEndpoint, location.pathname]);
    return (
        <main className="px-[100px] pb-[100px] flex w-full">
            <Filters applyFilters={applyFiltersHandler} />
            {!error.is ? (
                <ProductList title="Women Clothing" products={fetchedProducts} />
            ) : (
                <section className="pl-[50px] self-center text-center w-full">
                    <h1 className="mb-[50px] text-[22px] font-[600] text-[#3F4646]">
                        {error.message || 'Something went wrong!'}
                    </h1>
                </section>
            )}
        </main>
    );
};

export default Women;
