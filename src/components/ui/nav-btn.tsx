import React from 'react';

type NavButtonProps = {
    image: any;
    clickHandler: () => void;
};

const NavButton: React.FC<NavButtonProps> = ({ image, clickHandler }) => {
    return (
        <button
            onClick={() => {
                clickHandler();
            }}
            className={`bg-[#f6f6f6] p-[12px] hover:bg-[#8A33FD] cursor-pointer rounded-[8px]`}>
            <img className="w-[20px] h-[20px]" src={image} alt="some icon" />
        </button>
    );
};

export default NavButton;
