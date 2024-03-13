import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { filter, close } from '../../assets';
import { ColorType, SIZES, COLORS } from '../../constants';

type FiltersPropsType = {
    applyFilters: (color: string, size: string, minPrice: string, maxPrice: string) => void;
};

const Filters: React.FC<FiltersPropsType> = ({ applyFilters }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const field = event.target.name;
        setPriceRange({ ...priceRange, [field]: value });
    };
    const clearPriceRangeFilter = (key: string) => {
        setPriceRange({ ...priceRange, [key]: '' });
    };
    const handleSizeSelection = (size: string) => {
        setSelectedSize(size);
    };
    const clearSizeFilter = () => {
        setSelectedSize('');
    };
    const handleColorSelection = (color: string) => {
        setSelectedColor(color);
    };
    const clearColorFilter = () => {
        setSelectedColor('');
    };

    const updatePathnameFromState = () => {
        const params = new URLSearchParams();
        if (selectedColor.length) {
            params.set('color', selectedColor);
        }
        if (selectedSize.length) {
            params.set('size', selectedSize);
        }
        if (priceRange.min.length) {
            params.set('priceFrom', priceRange.min);
        }
        if (priceRange.max.length) {
            params.set('priceTo', priceRange.max);
        }
        const newUrl = `${location.pathname.split('?')[0]}?${params.toString()}`;
        navigate(newUrl);
    };

    useEffect(() => {
        updatePathnameFromState();
        applyFilters(selectedColor, selectedSize, priceRange.min, priceRange.max);
    }, [selectedColor, selectedSize, priceRange]);

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
                            name="min"
                            className="border-[1px] border-[#BEBCBD] rounded-md px-3 py-1 outline-none w-20"
                            onChange={handlePriceChange}
                            value={priceRange.min}
                        />
                    </label>
                    <label className="flex flex-col-reverse">
                        <span className="text-[10px]">To</span>
                        <input
                            type="text"
                            name="max"
                            className="border-[1px] border-[#BEBCBD] rounded-md px-3 py-1 outline-none w-20"
                            onChange={handlePriceChange}
                            value={priceRange.max}
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
                            <button
                                onClick={() => handleSizeSelection(size)}
                                className={`w-[60px] h-[30px] bg-white border-[1px] border-[#3C4242] rounded-md ${
                                    size === selectedSize &&
                                    'bg-[#2a2a2a] text-[#fff] border-[#d7d7d7]'
                                }`}>
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
                                onClick={() => handleColorSelection(color.title)}
                                className={`${
                                    color.code
                                } w-[60px] h-[30px] border-[1px] border-[#000] text-[#ededed] font-[700] rounded-md ${
                                    color.title === selectedColor &&
                                    'border-[3px] border-[#ff4040] text-[#ff4040]'
                                }`}>
                                {color.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pb-[25px]">
                <h1 className="text-[22px] font-[600] text-[#807D7E] border-y-[2px] border-[#BEBCBD] py-[20px] px-[30px]">
                    Applied Filters
                </h1>
                <ul className="pl-4 pt-3 font-[500] text-[#2a2a2a] flex flex-col gap-2">
                    {selectedColor.length ? (
                        <li className="bg-[#8A33FD] text-[#000] font-[600] rounded-[20px] w-fit py-2 px-3 flex gap-1 items-center">
                            Color: {selectedColor}
                            <button
                                className="hover:bg-[#fff] rounded-full"
                                onClick={clearColorFilter}>
                                <img src={close} alt="bin" className="w-[20px] h-[20px]" />
                            </button>
                        </li>
                    ) : (
                        <li></li>
                    )}
                    {selectedSize.length ? (
                        <li className="bg-[#8A33FD] text-[#000] font-[600] rounded-[20px] w-fit py-2 px-3 flex gap-1 items-center">
                            Size: {selectedSize}
                            <button
                                className="hover:bg-[#fff] rounded-full"
                                onClick={clearSizeFilter}>
                                <img src={close} alt="bin" className="w-[20px] h-[20px]" />
                            </button>
                        </li>
                    ) : (
                        <li></li>
                    )}
                    {priceRange.min.length ? (
                        <li className="bg-[#8A33FD] text-[#000] font-[600] rounded-[20px] w-fit py-2 px-3 flex gap-1 items-center">
                            Price from: {priceRange.min}
                            <button
                                className="hover:bg-[#fff] rounded-full"
                                onClick={() => clearPriceRangeFilter('min')}>
                                <img src={close} alt="bin" className="w-[20px] h-[20px]" />
                            </button>
                        </li>
                    ) : (
                        <li></li>
                    )}
                    {priceRange.max.length ? (
                        <li className="bg-[#8A33FD] text-[#000] font-[600] rounded-[20px] w-fit py-2 px-3 flex gap-1 items-center">
                            Price to: {priceRange.max}
                            <button
                                className="hover:bg-[#fff] rounded-full"
                                onClick={() => clearPriceRangeFilter('max')}>
                                <img src={close} alt="bin" className="w-[20px] h-[20px]" />
                            </button>
                        </li>
                    ) : (
                        <li></li>
                    )}
                </ul>
            </div>
        </aside>
    );
};

export default Filters;
