import { CartItem } from "@/components/cartItem";
import { CartSummary } from "@/components/cartSummary";
import { EmptyCart } from "@/components/emptyCart";
import { useCart } from "../../hooks";

import styles from "./CartPage.module.css";

export const CartPage = () => {
    const { cartItems } = useCart();

    return (
        <div className={styles.cart}>
            <h1 className={styles.title}>Корзина</h1>
            {cartItems.length === 0 ? (
                <EmptyCart />
            ) : (
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
            )}
        </div>
    );
};
