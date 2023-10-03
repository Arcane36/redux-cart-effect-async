import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
    const dispatch = useDispatch();
    const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);

    const toggleHandler = () => {
        dispatch(cartActions.toggleCart());
    };

    return (
        <button onClick={toggleHandler} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartTotalQuantity}</span>
        </button>
    );
};

export default CartButton;
