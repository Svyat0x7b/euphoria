import React from "react";

type NavButtonProps = {
    image: any,
    clickHandler: () => void,
}

const NavButton: React.FC<NavButtonProps> = ({image, clickHandler}) => {
    return   <button onClick={() => clickHandler()} className="bg-[#F6F6F6] p-[12px]">
    <img className="w-[20px] h-[20px]" src={image} alt="Heart" />
</button>;
};

export default NavButton;
