import { DISCOUNTS, DiscountType } from '../../constants';

const Discounts = () => {
    return (
        <section className="spc:pt-[130px] pt-[60px] spc:px-[100px] px-[50px]">
            <ul className=" w-full flex flex-wrap gap-[20px] items-center justify-center">
                {DISCOUNTS.map((discount: DiscountType) => (
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
