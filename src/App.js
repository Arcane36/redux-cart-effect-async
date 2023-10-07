import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useEffect } from "react";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let loadNumber = 1;

function App() {
    const isCartShown = useSelector((state) => state.cart.isCartShown);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (loadNumber <= 2) {
            loadNumber++;
            return;
        }

        if (cart.changed) {
            dispatch(sendCartData(cart));
        }
    }, [cart, dispatch]);

    return (
        <>
            {notification && (
                <Notification status={notification.status} title={notification.title} message={notification.message} />
            )}
            <Layout>
                {isCartShown && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;
