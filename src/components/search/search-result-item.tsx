import React from 'react';
import { Link } from 'react-router-dom';

export type SearchItemType = {
    _id: string;
    id: string;
    title: string;
    image: string;
};

interface SearchResultItemPropsType {
    item: SearchItemType;
}

const SearchResultItem: React.FC<SearchResultItemPropsType> = ({ item }) => {
    return (
        <Link to={`products/${item.id}`}>
            <div className="flex gap-2 hover:bg-[#fff] cursor-pointer py-2 px-3 overflow-hidden">
                <div w-full h-full object-contain>
                    <img src={item.image} alt={item.title} className="w-[20px]" />
                </div>
                <h1 className="font-[600]">{item.title}</h1>
            </div>
        </Link>
    );
};

export default SearchResultItem;
