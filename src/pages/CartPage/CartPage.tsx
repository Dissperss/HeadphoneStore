import { useContext } from "react";
import { CartItem } from "../../components/cartItem";
import { CartSummary } from "../../components/cartSummary";
import { EmptyCart } from "../../components/emptyCart";
import { CartContext } from "../../context/cart/cartContext";

import styles from "./CartPage.module.css";

export const CartPage = () => {
    const { cartItems } = useContext(CartContext);

    if (cartItems.length === 0) {
        return (
            <div className={styles.cart}>
                <h1 className={styles.title}>Корзина</h1>
                <EmptyCart />
            </div>
        );
    }

    return (
        <div className={styles.cart}>
            <h1 className={styles.title}>Корзина</h1>

            <div className={styles.cart__wrapper}>
                <div className={styles.cart__list}>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>

                <div className={styles.cart__summary}>
                    <CartSummary />
                </div>
            </div>
        </div>
    );
};
