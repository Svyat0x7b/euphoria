import React, { useState, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { logout } from '../../utils/auth';
import { ACCOUNT_MENU } from '../../constants';
import { removeUser, selectUser } from '../../redux/user/user-slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

type AccountLayoutPropsType = {
    children: ReactNode;
};

const AccountLayout: React.FC<AccountLayoutPropsType> = (props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);
    //@ts-ignore
    const [activeUnit, setActiveUnit] = useState(0);
    const location = useLocation();
    console.log(location.pathname);

    return (
        <main className="pb-[100px] px-[100px] pt-[50px] flex">
            <aside className="text-[#807D7E] w-[300px]">
                <div className="flex items-center gap-3">
                    <div className="w-[6px] h-[30px] bg-[#8A33FD]"></div>
                    <h1 className="text-[28px] font-[600] text-[#3C4242]">
                        Hello{user.token !== null && ` ,${user.firstname}`}
                    </h1>
                </div>
                <p className="text-[14px] font-[400] mt-[10px]">Welcome to your account!</p>
                <nav className="mt-[22px]">
                    <ul>
                        {ACCOUNT_MENU.map((navItem) => (
                            <li
                                onClick={() => {
                                    if (navItem.link === 'signout') {
                                        dispatch(removeUser());
                                        logout();
                                        return;
                                    }
                                    navigate(`/account/${navItem.link}`);
                                }}
                                className={`flex items-center gap-3 py-[11px] pl-[35px] w-[80%] hover:bg-[#F6F6F6] hover: cursor-pointer ${
                                    location.pathname === `/account/${navItem.link}`
                                        ? 'bg-[#F6F6F6]'
                                        : 'bg-white'
                                }`}>
                                <div className="w-[22px] h-[22px] object-contain">
                                    <img
                                        src={navItem.icon}
                                        alt={navItem.title}
                                        className="w-[100%] h-[100%]"
                                    />
                                </div>
                                <h3 className="text-[18px] font-[600]">{navItem.title}</h3>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            {props.children}
        </main>
    );
};

export default AccountLayout;
