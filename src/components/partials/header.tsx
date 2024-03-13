import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SearchResultItem } from '../search';
import { useAppSelector } from '../../redux/hooks';
import { selectTotalAmount } from '../../redux/cart/cart-slice';
import { selectWishlist } from '../../redux/wishlist/wishlist-slice';
import NavButton from '../ui/nav-btn';
import { logo, search, heart, user, cart } from '../../assets';
import { API_DOMAIN, LINKS, NavLinkType } from '../../constants';
import { SearchItemType } from '../search/search-result-item';

const Header = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<[] | null>(null);
    const [searchError, setSearchError] = useState({ is: false, message: '' });
    const totalAmount = useAppSelector(selectTotalAmount);
    const wishlistItems = useAppSelector(selectWishlist);

    useEffect(() => {
        const provideSearch = async () => {
            if (searchTerm.length === 0) {
                setSearchError({ is: false, message: '' });
                setSearchResults(null);
                return;
            }

            if (searchTerm.length < 3) {
                setSearchError({
                    is: true,
                    message: 'Search query must contain 3 or more symbols!',
                });
                return;
            }
            let res;
            try {
                res = await axios.get(`${API_DOMAIN}/api/v1/search?q=${searchTerm}`);

                if (res.status < 200 || res.status > 299) {
                    setSearchError({
                        is: true,
                        message: res.data.message || 'Something went wrong!',
                    });
                    return;
                }

                console.log('res:' + searchResults);
                console.log('error' + searchError);

                setSearchError({ is: false, message: '' });
                setSearchResults(res.data);
            } catch (err) {
                setSearchError({ is: true, message: res?.data.message || 'Something went wrong!' });
            }
        };
        provideSearch();
    }, [searchTerm]);

    return (
        <header className="bg-[#fff] spc:px-[102px] px-[50px] spc:py-[31px] py-[15px] sticky top-0 z-10 flex justify-between items-center">
            <div className="">
                <img src={logo} alt="Euphoria" />
            </div>
            <nav className="hidden tablet:block">
                <ul className="flex gap-[40px] justify-center items-center">
                    {LINKS.map((link: NavLinkType, index: number) => (
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
                <div className="mpc:relative hidden mpc:block">
                    <button className="absolute w-[20px] top-[15px] left-[5px] hover:bg-[#fff] rounded-md">
                        <img className="h-[20px]" src={search} alt="Search" />
                    </button>
                    <input
                        className="px-[20px] py-[12px] pl-[40px] outline-none bg-[#f6f6f6] border-none rounded-md"
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {(searchError.is || searchResults) && (
                    <div className="absolute w-[100%] bg-[#ededed] text-[#2a2a2a] py-2 rounded-b-[20px] overflow-hidden">
                        {searchError.is ? (
                            <div className="py-1 px-2 text-[12px] font-[600]">
                                <p>{searchError.message}</p>
                            </div>
                        ) : (
                            <div>
                                {!searchResults ? (
                                    <p>Loading...</p>
                                ) : searchResults?.length === 0 ? (
                                    <p>There is no any matches</p>
                                ) : (
                                    searchResults.map((result: SearchItemType) => (
                                        <SearchResultItem item={result} />
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className=" flex justify-center items-center gap-[12px]">
                <div className="relative">
                    {wishlistItems.length > 0 ? (
                        <div className=" absolute top-[-10px] right-[-5px] w-5 h-5 bg-[#8A33FD] text-[#fff] text-[10px] rounded-full flex justify-center items-center">
                            {wishlistItems.length}
                        </div>
                    ) : null}
                    <NavButton image={heart} clickHandler={() => navigate('/account/wishlist')} />
                </div>
                <div className="relative">
                    {totalAmount > 0 ? (
                        <div className=" absolute top-[-10px] right-[-5px] w-5 h-5 bg-[#8A33FD] text-[#fff] text-[10px] rounded-full flex justify-center items-center">
                            {totalAmount}
                        </div>
                    ) : null}
                    <NavButton image={cart} clickHandler={() => navigate('/cart')} />
                </div>

                <NavButton image={user} clickHandler={() => navigate('/account/myinfo')} />
            </div>
        </header>
    );
};

export default Header;
