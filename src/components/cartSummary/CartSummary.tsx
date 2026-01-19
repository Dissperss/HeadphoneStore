import styles from "./CartSummary.module.css";

export const CartSummary = () => {
    return (
        <div className={styles.cart__summary}>
            <div className={styles.cart__header}>
                <span className={styles.cart__text}>итого</span>
                <span className={styles.cart__result_sum}>2927 ₽</span>
            </div>
            <button className={styles.checkout__btn}>
                Перейти к оформлению
            </button>
        </div>
    );
};
