import ProductItem from './product-item';

export type ProductType = {
    _id: string;
    id: string;
    title: string;
    brand: string;
    price: number;
    img: string[];
    sizes: string[];
    rating: number;
    colors: string[];
};

// type sizeObjType = {
//     [size: string]: number;
// };

type ProductListPropsType = {
    products: ProductType[] | null;
    title: String;
};

const ProductList: React.FC<ProductListPropsType> = ({ products, title }) => {
    if (!products) {
        return (
            <section className="pt-[50px] pl-[50px]">
                <h1 className="mb-[50px] text-[22px] font-[600] text-[#3F4646]">Loading...</h1>
            </section>
        );
    }

    if (products.length === 0) {
        return (
            <section className="pt-[50px] pl-[50px]">
                <h1 className="mb-[50px] text-[22px] font-[600] text-[#3F4646]">
                    There is no such items!
                </h1>
            </section>
        );
    }

    return (
        <section className="pt-[50px] pl-[50px]">
            <h1 className="mb-[50px] text-[22px] font-[600] text-[#3F4646]">{title}</h1>
            <ul className="grid grid-cols-3 gap-x-[24px] gap-y-[50px]">
                {products.map((product: ProductType) => (
                    <ProductItem product={product} />
                ))}
            </ul>
        </section>
    );
};

export default ProductList;
