import { useContext } from "react";
import { CartItem } from "../components/cartItem";
import { CartSummary } from "../components/cartSummary";
import { CartContext } from "../context/cart/cartContext";

import styles from "./CartPage.module.css";

export const CartPage = () => {
    const { cartItems } = useContext(CartContext);

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
