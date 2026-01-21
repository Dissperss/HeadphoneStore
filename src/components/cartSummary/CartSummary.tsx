import { useContext } from "react";
import { CartContext } from "../../context/cart/cartContext";

import styles from "./CartSummary.module.css";

export const CartSummary = () => {
    const { totalPrice } = useContext(CartContext);
    return (
        <div className={styles.cart__summary}>
            <div className={styles.cart__header}>
                <span className={styles.cart__text}>итого</span>
                <span className={styles.cart__result_sum}>{totalPrice}</span>
            </div>
            <button className={styles.checkout__btn}>
                Перейти к оформлению
            </button>
        </div>
    );
};
