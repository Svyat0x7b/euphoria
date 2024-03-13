import { useState, FormEvent, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setToken, setUserdata } from '../../utils/auth';
import { registerBanner } from '../../assets/index';
import { OAuthWays, ErrorType, API_DOMAIN } from '../../constants';
import { useAppDispatch } from '../../redux/hooks';
import { setUser } from '../../redux/user/user-slice';

interface UserDataType {
    email: string;
    firstname: string;
    lastname: string;
    address: string;
    password: string;
}

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [userData, setUserData] = useState<UserDataType>({
        email: '',
        firstname: '',
        lastname: '',
        address: '',
        password: '',
    });
    const [error, setError] = useState<ErrorType>({ isError: false, message: '' });

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const registerHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { email, password, firstname, lastname, address } = userData;

        try {
            if (!(email && password && firstname && lastname && address)) {
                setError({
                    isError: true,
                    message: 'Input values can`t be empty!',
                });
                return;
            }

            if (!email.includes('@')) {
                setError({
                    isError: true,
                    message: 'Email is invalid! Must contain @',
                });
                return;
            }

            if (password.length < 8) {
                setError({
                    isError: true,
                    message: 'Password is invalid! Must  contain 8 symbols or more!',
                });
                return;
            }
            const res = await axios.post(`${API_DOMAIN}/api/v1/auth/register`, userData);

            console.log(res);
            if (res.status < 200 || res.status > 299) {
                setError({
                    isError: true,
                    message: res.data || 'Server Error!',
                });
                return;
            }

            //write data to localstorage
            setToken(res.data.token);
            setUserdata({
                email: res.data.email,
                firstname: res.data.firstname,
                lastname: res.data.lastname,
                address: res.data.address,
                id: res.data._id,
            });
            dispatch(
                setUser({
                    email: res.data.email,
                    firstname: res.data.firstname,
                    lastname: res.data.lastname,
                    address: res.data.address,
                    id: res.data._id,
                    token: res.data.token,
                }),
            );
            //redirect to the home page
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <main className="w-full flex">
            <section className="w-1/2">
                <img src={registerBanner} alt="peoples" />
            </section>
            <section className="w-1/2 px-[77px] pt-[30px]">
                <h1 className="text-[34px] text-[#333] font-[600]">Register Your Account!</h1>
                <div className="flex flex-col gap-[50px] mt-[50px]">
                    <form
                        onSubmit={registerHandler}
                        className="flex flex-col items-start gap-[15px] pl-[20px]">
                        <label htmlFor="email" className="flex flex-col w-full">
                            E-mail
                            <input
                                className="w-2/3 px-[15px] ml-[10px] py-[5px] border-[2px] rounded-md border-[#333] outline-none"
                                type="email"
                                name="email"
                                placeholder="yourmail@domen"
                                value={userData.email}
                                onChange={inputChangeHandler}
                            />
                        </label>
                        <label htmlFor="firstname" className="flex flex-col w-full">
                            Firstname
                            <input
                                className="w-2/3 px-[15px] ml-[10px] py-[5px] border-[2px] rounded-md border-[#333] outline-none"
                                type="text"
                                placeholder="John"
                                name="firstname"
                                value={userData.firstname}
                                onChange={inputChangeHandler}
                            />
                        </label>
                        <label htmlFor="lastname" className="flex flex-col w-full">
                            Lastname
                            <input
                                className="w-2/3 px-[15px] ml-[10px] py-[5px] border-[2px] rounded-md border-[#333] outline-none"
                                type="text"
                                placeholder="Smith"
                                name="lastname"
                                value={userData.lastname}
                                onChange={inputChangeHandler}
                            />
                        </label>
                        <label htmlFor="address" className="flex flex-col w-full">
                            Address
                            <input
                                className="w-2/3 px-[15px] ml-[10px] py-[5px] border-[2px] rounded-md border-[#333] outline-none"
                                type="text"
                                placeholder="Ukraine, Kyiv, Independent St. 54/103"
                                name="address"
                                value={userData.address}
                                onChange={inputChangeHandler}
                            />
                        </label>
                        <label htmlFor="password" className="flex flex-col w-full">
                            Password
                            <input
                                className="w-2/3 px-[15px] ml-[10px] py-[5px] border-[2px] rounded-md border-[#333] outline-none"
                                type="password"
                                placeholder="********"
                                name="password"
                                value={userData.password}
                                onChange={inputChangeHandler}
                            />
                        </label>
                        <button
                            type="submit"
                            className="bg-[#8A33FD] px-[20px] py-[16px] rounded-[8px] font-[500] text-[18px] text-[#fff] hover:bg-[#9d57f8]">
                            Register
                        </button>
                        <p>
                            If you already have an account you can{' '}
                            <Link to="/login" className="text-[#8A33FD] underline">
                                login here
                            </Link>
                            !
                        </p>
                    </form>
                    <div className="w-full flex items-center justify-center">
                        <div className="w-1/3 h-[2px] bg-[#666]"></div>
                        <span className="w-1/3 text-center">or</span>
                        <div className="w-1/3 h-[2px] bg-[#666]"></div>
                    </div>
                    <div className="w-full flex flex-col gap-[10px] items-center">
                        {OAuthWays.map((item) => (
                            <button
                                className="flex gap-[5px] items-center px-[20px] py-[16px] border-[1px] rounded-md hover:bg-slate-200"
                                key={item.title}>
                                <div>
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <span>Continue With {item.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Register;
