import { hero } from '../../assets/index';

const Hero = () => {
    return (
        <section className="h-full relative">
            <img src={hero} alt="Hero" className="w-full h-[100%] object-contain" />
            <div className="absolute top-[10%] mpc:left-[200px] left-[50px] flex flex-col mpc:gap-[40px] gap-[10px] mpc:w-[490px] w-[340px]">
                <h2 className="tablet:text-[32px] text-[20px] text-[#fff] font-[500]">
                    T-shirt / Tops
                </h2>
                <h1 className="mpc:text-[78px] text-[46px] text-[#fff] font-[800]">
                    Summer Value Pack
                </h1>
                <h2 className="tablet:text-[32px] text-[20px] text-[#fff] font-[500]">
                    cool / colorful / comfy
                </h2>
                <button className=" w-fit tablet:px-[72px] px-[50px] tablet:py-[16px] py-[12px] bg-[#fff] text-[#000] font-[800] tablet:text-[25px] text-[20px]">
                    Shop Now
                </button>
            </div>
        </section>
    );
};

export default Hero;
