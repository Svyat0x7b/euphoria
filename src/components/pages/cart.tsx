import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { selectCart, selectTotalPrice } from '../../redux/cart/cart-slice';
import {
    incrementProductAmount,
    decrementProductAmount,
    removeFromCart,
} from '../../redux/cart/cart-slice';
import bin from '../../assets/delete.svg';
import { CartItemType } from '../../redux/cart/cart-slice';
import emptyCart from '../../assets/cart/empty-cart.png';

const Cart = () => {
    const items = useAppSelector(selectCart);
    const totalPrice = useAppSelector(selectTotalPrice);
    const formattedTotalPrice = totalPrice.toFixed(2);

    const dispatch = useAppDispatch();

    if (items.length === 0) {
        return (
            <main>
                <div className="w-full text-center mb-[50px]">
                    <p className="text-[#807D7E] text-[14px] font-[400]">
                        Already registered?{' '}
                        <Link to="/" className="text-[#8A33FD] text-[14px] font-[500] underline">
                            Log in
                        </Link>
                    </p>
                </div>
                <div className="flex flex-col items-center gap-20">
                    <h1 className="text-[22px] font-[500] text-[#3C4242]">
                        Your cart is <span className="text-[#8A33FD] font-[700]">empty!</span>
                    </h1>
                    <div>
                        <img src={emptyCart} alt="empty cart" />
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main>
            <div className="w-full text-center mb-[50px]">
                <p className="text-[#807D7E] text-[14px] font-[400]">
                    Already registered?{' '}
                    <Link to="/" className="text-[#8A33FD] text-[14px] font-[500] underline">
                        Log in
                    </Link>
                </p>
            </div>
            <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-[#3C4242] text-[18px] font-[600] text-white">
                    <tr>
                        <th className="py-[27px]">Product Details</th>
                        <th className="py-[27px]">Price</th>
                        <th className="py-[27px]">Quantity</th>
                        <th className="py-[27px]">Shipping</th>
                        <th className="py-[27px]">Subtotal</th>
                        <th className="py-[27px]">Action</th>
                    </tr>
                </thead>
                <tbody className="text-gray-800">
                    {items.map((item: CartItemType) => {
                        const subtotal = (item.amount * item.product.price).toFixed(2);

                        return (
                            <tr className="">
                                <th className="">
                                    <div className="flex gap-20 pl-[100px] pt-[70px] pb-[50px] w-fit">
                                        <div className="w-[105px] h-[120px]">
                                            <img
                                                src={item.product.img}
                                                alt={item.product.title}
                                                className="w-[100%] h-[100%] object-contain"
                                            />
                                        </div>
                                        <div className="text-start">
                                            <h1 className="text-[18px] text-[#3C4242] font-[700]">
                                                {item.product.title}
                                            </h1>
                                            <p className="text-[14px] text-[#807D7E] font-[500]">
                                                Size: {item.product.size}
                                            </p>
                                            <p className="text-[14px] text-[#807D7E] font-[500]">
                                                Color: {item.product.color}
                                            </p>
                                        </div>
                                    </div>
                                </th>
                                <th className="text-[18px] text-[#3C4242] font-[700]">
                                    $<span>{item.product.price}</span>
                                </th>
                                <th className="">
                                    <div className="flex justify-center items-center w-full gap-[16px]">
                                        <button
                                            onClick={() =>
                                                dispatch(incrementProductAmount(item.product.id))
                                            }
                                            className="py-2 px-3 bg-[#F6F6F6] rounded-[12px]">
                                            +
                                        </button>
                                        <span className="block text-[14px] text-[#3C4242] font-[500]">
                                            {item.amount}
                                        </span>
                                        <button
                                            onClick={() =>
                                                dispatch(decrementProductAmount(item.product.id))
                                            }
                                            className="py-2 px-3 bg-[#F6F6F6] rounded-[12px]">
                                            -
                                        </button>
                                    </div>
                                </th>
                                <th className="">
                                    <h1 className="text-[18px] font-[700] text-[#BEBCBD]">Free</h1>
                                </th>
                                <th className="text-[18px] text-[#3C4242] font-[700]">
                                    $<span>{subtotal}</span>
                                </th>
                                <th className="">
                                    <button
                                        onClick={() => dispatch(removeFromCart(item.product.id))}>
                                        <img src={bin} alt="Rabbish bin" />
                                    </button>
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="px-[100px] py-[30px] flex justify-between">
                <div>
                    <h1 className="text-[24px] font-[600] text-[#3C4242]">Discount Codes</h1>
                    <p className="mt-[10px] text-[14px] font-[600] text-[#807D7E]">
                        Enter your coupon code if you have one
                    </p>
                    <form className="mt-[40px] h-[43px] rounded-[12px] overflow-hidden flex items-center">
                        <input
                            type="text"
                            className="h-full border-[1px] border-[#BEBCBD] outline-none rounded-[12px] px-5 uppercase border-r-0 rounded-r-none"
                        />
                        <button
                            type="submit"
                            className="h-full bg-[#8A33FD] text-[#fff] px-5 border-[1px] border-[#8A33FD]">
                            Apply Coupon
                        </button>
                    </form>
                </div>
                <div className="text-[22px] font-[500] text-[#3C4242] flex flex-col gap-[40px] ">
                    <div>
                        <p className="flex justify-between items-center">
                            <span>Sub Total:</span>{' '}
                            <span className="font-[700]">${formattedTotalPrice}</span>
                        </p>
                        <p className="mt-[15px] flex justify-between items-center">
                            <span>Shipping:</span> <span className="font-[700]">$0.00</span>
                        </p>
                    </div>
                    <div>
                        <p className="flex justify-between items-center gap-20">
                            <span>Grand Total:</span>{' '}
                            <span className="font-[700] ">${formattedTotalPrice}</span>
                        </p>
                    </div>
                    <div className="w-7/10 h-[2px] bg-[#BEBCBD]"></div>
                    <div className="flex items-center justify-center">
                        <button className="px-[33px] py-[12px] bg-[#8A33FD] text-[#fff] rounded-[12px]">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Cart;
