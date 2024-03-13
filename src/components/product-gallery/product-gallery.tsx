import React, { useState } from 'react';

interface IProductGalleryProps {
    items: string[];
}

const ProductGallery: React.FC<IProductGalleryProps> = ({ items }) => {
    const [activeImg, setActiveImg] = useState(items[0]);
    const [imgList] = useState(items);

    return (
        <section className="w-1/2 flex items-center justify-center gap-4">
            <aside className="flex flex-col gap-3">
                {imgList.map((img: string) => (
                    <div
                        className={`w-[120px] h-[70px] border-[1px] cursor-pointer ${
                            activeImg === img ? 'border-[2px] border-[#000]' : ''
                        }`}
                        onClick={() => setActiveImg(img)}>
                        <img src={img} alt="img" className="w-full h-full object-cover" />
                    </div>
                ))}
            </aside>
            <div className="w-[60%] h-[300px] border-[1px]">
                <img src={activeImg} alt="base img" className="w-full h-full object-cover" />
            </div>
        </section>
    );
};

export default ProductGallery;
