import React from 'react';
import hero1 from '../../assets/card-hero-1.jpg';
import hero2 from '../../assets/card-hero-2.jpg';

type DiscountType = {
    subtext: string;
    headtext: string;
    discount: number;
    img: any;
};

const DISCOUNTS: DiscountType[] = [
    { subtext: 'Low Price', headtext: 'High Coziness', discount: 50, img: hero1 },
    { subtext: 'Beyoung Presents', headtext: 'Breezy Summer Style', discount: 25, img: hero2 },
];

const Discounts = () => {
    return (
        <section className="pt-[130px] px-[100px]">
            <ul className="flex justify-between">
                {DISCOUNTS.map((discount) => (
                    <li className="relative">
                        <div className="absolute top-[5%] left-[28px] w-[264px]">
                            <h3 className="text-[18px] font-[800] text-[#fff] mt-[40px]">
                                {discount.subtext}
                            </h3>
                            <h2 className="text-[34px] font-[800] text-[#fff] mt-[24px]">
                                {discount.headtext}
                            </h2>
                            <p className="text-[16px] font-[500] text-[#fff] mt-[10px] uppercase">
                                UPTO {discount.discount}% OFF
                            </p>
                            <a
                                href="#"
                                className="block text-[20px] font-[800] text-[#fff] underline mt-[40px]">
                                Explore Items
                            </a>
                        </div>
                        <img src={discount.img} alt="Hero" />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Discounts;
