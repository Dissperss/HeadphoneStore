import { CartItem } from "../components/cartItem";
import { CartSummary } from "../components/cartSummary";

export const CartPage = () => {
    return (
        <div className="cart">
            <h1 className="title">Корзина</h1>
            <div className="cart__list">
                <CartItem />
                <CartItem />
            </div>
            <div className="cart__summary">
                <CartSummary />
            </div>
        </div>
    );
};
