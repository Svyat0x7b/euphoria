import filter from '../../assets/filter.svg';

type ColorType = {
    title: string;
    code: string;
};

const SIZES: string[] = ['S', 'M', 'L', 'XS', 'XM', 'XL'];
const COLORS: ColorType[] = [
    { title: 'Black', code: 'bg-[#424242]' },
    { title: 'Green', code: 'bg-[#16745b]' },
    { title: 'White', code: 'bg-[#fff]' },
    { title: 'Yellow', code: 'bg-[#ffd700]' },
    { title: 'Blue', code: 'bg-[#84bff3]' },
    { title: 'Brown', code: 'bg-[#94826f]' },
];

const Filters = () => {
    return (
        <aside className="w-3/12 border-[2px] border-[#BEBCBD]">
            <div className="flex justify-between items-center py-[20px] px-[30px]">
                <h2 className="text-[22px] font-[600] text-[#807D7E]">Filters</h2>
                <div>
                    <img src={filter} alt="filters" />
                </div>
            </div>
            <div>
                <h1 className="text-[22px] font-[600] text-[#807D7E] border-y-[2px] border-[#BEBCBD] py-[20px] px-[30px]">
                    Price
                </h1>
                <div className="flex items-center w-full gap-5 px-[35px] py-[20px]">
                    <label className="flex flex-col-reverse">
                        <span className="text-[10px]">From</span>
                        <input
                            type="text"
                            className="border-[1px] border-[#BEBCBD] rounded-md px-3 py-1 outline-none w-20"
                        />
                    </label>
                    <label className="flex flex-col-reverse">
                        <span className="text-[10px]">To</span>
                        <input
                            type="text"
                            className="border-[1px] border-[#BEBCBD] rounded-md px-3 py-1 outline-none w-20"
                        />
                    </label>
                </div>
            </div>
            <div>
                <h1 className="text-[22px] font-[600] text-[#807D7E] border-y-[2px] border-[#BEBCBD] py-[20px] px-[30px]">
                    Size
                </h1>
                <ul className="grid grid-cols-3 justify-items-center place-items-center gap-y-3 py-[20px] px-[30px]">
                    {SIZES.map((size: string) => (
                        <li key={size}>
                            <button className="w-[60px] h-[30px] bg-white border-[1px] border-[#3C4242] rounded-md">
                                {size}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h1 className="text-[22px] font-[600] text-[#807D7E] border-y-[2px] border-[#BEBCBD] py-[20px] px-[30px]">
                    Colors
                </h1>
                <ul className="grid grid-cols-3 justify-items-center place-items-center gap-y-3 py-[20px] px-[30px]">
                    {COLORS.map((color: ColorType) => (
                        <li>
                            <button
                                className={`${color.code} w-[60px] h-[30px] border-[1px] border-[#000] text-[#ededed] font-[700] rounded-md`}>
                                {color.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Filters;
