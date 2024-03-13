import { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginBanner } from '../../assets';
import { OAuthWays, ErrorType, API_DOMAIN } from '../../constants';
import { setToken, setUserdata } from '../../utils/auth';
import { useAppDispatch } from '../../redux/hooks';
import { setUser } from '../../redux/user/user-slice';

interface LoginDataType {
    email: string;
    password: string;
}

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [loginData, setLoginData] = useState<LoginDataType>({
        email: '',
        password: '',
    });
    const [error, setError] = useState<ErrorType>({
        isError: false,
        message: '',
    });

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (!(loginData.email && loginData.password)) {
                setError({
                    isError: true,
                    message: 'Input fields must be filled!',
                });
                return;
            }

            if (!loginData.email.includes('@')) {
                setError({
                    isError: true,
                    message: 'Email is invalid!',
                });
                return;
            }

            if (loginData.password.length < 8) {
                setError({
                    isError: true,
                    message: 'Password must contain 8 or more symbols!',
                });
                return;
            }

            const res = await axios.post(`${API_DOMAIN}/api/v1/auth/login`, loginData);

            if (res.status < 200 || res.status > 299) {
                setError({
                    isError: true,
                    message: res.data.message,
                });
                return;
            }

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
            navigate('/');
        } catch (err: any) {
            console.log(err);
            setError({
                isError: true,
                message: err.response.data.error || 'An error occurred',
            });
        }
    };
    return (
        <main className="w-full flex">
            <section className="w-1/2">
                <img src={loginBanner} alt="peoples" />
            </section>
            <section className="w-1/2 px-[77px] pt-[30px] flex flex-col gap-[50px]">
                <h1 className="text-[34px] text-[#333] font-[600]">Login Your Account!</h1>
                <form
                    onSubmit={loginHandler}
                    className="flex flex-col items-start gap-[15px] pl-[20px]">
                    <label htmlFor="email" className="flex flex-col w-full">
                        E-mail
                        <input
                            className="w-2/3 px-[15px] ml-[10px] py-[5px] border-[2px] rounded-md border-[#333] outline-none"
                            type="email"
                            name="email"
                            value={loginData.email}
                            onChange={inputChangeHandler}
                            placeholder="yourmail@domen"
                        />
                    </label>
                    <label htmlFor="password" className="flex flex-col w-full">
                        Password
                        <input
                            className="w-2/3 px-[15px] ml-[10px] py-[5px] border-[2px] rounded-md border-[#333] outline-none"
                            type="password"
                            name="password"
                            value={loginData.password}
                            onChange={inputChangeHandler}
                            placeholder="********"
                        />
                    </label>
                    {error.isError && <p className="text-[12px] text-red-500">{error.message}</p>}
                    <button
                        type="submit"
                        className="bg-[#8A33FD] px-[20px] py-[16px] rounded-[8px] font-[500] text-[18px] text-[#fff] hover:bg-[#9d57f8]">
                        Login
                    </button>
                    <p>
                        If you don`t` have an account you can{' '}
                        <Link to="/register" className="text-[#8A33FD] underline">
                            register here
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
            </section>
        </main>
    );
};

export default Login;
