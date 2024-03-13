import { Routes, Route } from 'react-router-dom';
import {
    Home,
    Women,
    Wishlist,
    Cart,
    Register,
    MyInfo,
    Login,
    Men,
} from './components/pages/index';
import AccountLayout from './components/layout/account-layout';
import { useAppDispatch } from './redux/hooks';
import { setUser } from './redux/user/user-slice';
import { getToken, getUserdata } from './utils/auth';
import ProductDetail from './components/pages/product-detail';
import Joggers from './components/pages/joggers';
import MyOrders from './components/pages/my-orders';
import Combos from './components/pages/combos';
import { NotFound } from './components/partials';

function App() {
    const dispatch = useAppDispatch();
    const user = getUserdata();
    const token = getToken();

    if (user && token) {
        dispatch(setUser({ ...user, token: token }));
    }
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/joggers" element={<Joggers />} />
            <Route path="/combos" element={<Combos />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
                path="/account/wishlist"
                element={
                    <AccountLayout>
                        <Wishlist />
                    </AccountLayout>
                }
            />
            <Route
                path="/account/myinfo"
                element={
                    <AccountLayout>
                        <MyInfo />
                    </AccountLayout>
                }
            />
            <Route
                path="/account/myorders"
                element={
                    <AccountLayout>
                        <MyOrders />
                    </AccountLayout>
                }
            />
            <Route path="*" element={<NotFound message={'This route doesn`t exist'} />} />
        </Routes>
    );
}

export default App;
