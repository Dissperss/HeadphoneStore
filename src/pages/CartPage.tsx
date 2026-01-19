import { CartItem } from "../components/cartItem";
import { CartSummary } from "../components/cartSummary";

import styles from "./CartPage.module.css";

export const CartPage = () => {
    return (
        <div className={styles.cart}>
            <h1 className={styles.title}>Корзина</h1>
            <div className={styles.cart__wrapper}>
                <div className={styles.cart__list}>
                    <CartItem />
                    {/* <CartItem /> */}
                </div>
                <div className={styles.cart__summary}>
                    <CartSummary />
                </div>
            </div>
        </div>
    );
};
