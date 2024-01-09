import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { selectTotalAmount } from '../../redux/cart/cart-slice';
import NavButton from '../ui/nav-btn';
import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import heart from '../../assets/heart.svg';
import user from '../../assets/user.svg';
import cart from '../../assets/cart.svg';

type LinkType = {
    url: string;
    title: string;
};

const LINKS: LinkType[] = [
    { url: '/', title: 'Shop' },
    { url: '/men', title: 'Men' },
    { url: '/women', title: 'Women' },
    { url: '/joggers', title: 'Joggers' },
    { url: '/combos', title: 'Combos' },
];

const Header = () => {
    const [isActive, setIsActive] = useState(0);
    const totalAmount = useAppSelector(selectTotalAmount);
    const navigate = useNavigate();
    return (
        <header className="bg-[#fff] px-[102px] py-[31px] sticky top-0 z-10 flex justify-between items-center">
            <div className="">
                <img src={logo} alt="Euphoria" />
            </div>
            <nav>
                <ul className="flex gap-[40px] justify-center items-center">
                    {LINKS.map((link: LinkType, index: number) => (
                        <li>
                            <Link
                                onClick={() => setIsActive(index)}
                                className={
                                    isActive === index ? 'text-[#000] font-[700]' : 'text-slate-500'
                                }
                                to={link.url}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="relative">
                <img
                    className="absolute w-[20px] h-[20px] top-[15px] left-[5px]"
                    src={search}
                    alt="Search"
                />
                <input
                    className="px-[20px] py-[12px] pl-[40px] outline-none bg-[#f6f6f6] border-none rounded-md"
                    type="text"
                    placeholder="Search..."
                />
            </div>
            <div className=" flex justify-center items-center gap-[12px]">
                <NavButton image={heart} clickHandler={() => navigate('/cart')} />
                <div className="relative">
                    {totalAmount > 0 ? (
                        <div className=" absolute top-[-10px] right-[-5px] w-5 h-5 bg-[#8A33FD] text-[#fff] text-[10px] rounded-full flex justify-center items-center">
                            {totalAmount}
                        </div>
                    ) : null}
                    <NavButton image={cart} clickHandler={() => navigate('/cart')} />
                </div>

                <NavButton image={user} clickHandler={() => navigate('/cart')} />
            </div>
        </header>
    );
};

export default Header;
