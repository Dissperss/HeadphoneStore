import { useCart } from "../../hooks";

import styles from "./CartSummary.module.css";

export const CartSummary = () => {
    const { totalPrice } = useCart();
    return (
        <div className={styles.cart__summary}>
            <div className={styles.cart__header}>
                <span className={styles.cart__text}>итого</span>
                <span key={totalPrice} className={styles.cart__result_sum}>
                    {totalPrice} ₽
                </span>
            </div>
            <button className={styles.checkout__btn}>
                Перейти к оформлению
            </button>
        </div>
    );
};
