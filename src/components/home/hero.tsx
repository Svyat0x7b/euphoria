import React from 'react';
import hero from '../../assets/shop-hero-1-product-slide-1.jpg';

const Hero = () => {
    return (
        <section className="h-[100vh] relative">
            <img src={hero} alt="Hero" className="w-full h-[100%]" />
            <div className="absolute top-[10%] left-[200px] flex flex-col gap-[40px] w-[490px]">
                <h2 className="text-[32px] text-[#fff] font-[500]">T-shirt / Tops</h2>
                <h1 className="text-[78px] text-[#fff] font-[800]">Summer Value Pack</h1>
                <h2 className="text-[32px] text-[#fff] font-[500]">cool / colorful / comfy</h2>
                <button className=" w-fit px-[72px] py-[16px] bg-[#fff] text-[#000] font-[800] text-[25px]">
                    Shop Now
                </button>
            </div>
        </section>
    );
};

export default Hero;
