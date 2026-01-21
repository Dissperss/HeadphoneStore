// import { headphones } from "../../stabs/products";
// Потом подставляем headphones.title/price/img итд.
import { DeleteIcon } from "../icons";
import { QuantityBtnMinus, QuantityBtnPlus } from "../icons";
import { CartContext, type CartItemType } from "../../context/cart/cartContext";
// import appleByzS852 from "../../assets/img/apple_byz_s852ipng.png";

import styles from "./CartItem.module.css";
import { useContext } from "react";

type CartItemProps = {
    item: CartItemType;
};

export const CartItem = ({ item }: CartItemProps) => {
    const { title, price, img, quantity } = item;
    const { increaseQuantity, decreaseQuantity, removeFromCart } =
        useContext(CartContext);

    return (
        <div className={styles.cart__item}>
            <div className={styles.item__inner}>
                <img src={img} alt={title} className={styles.item__img} />
                <div className={styles.item__quantity}>
                    <button
                        onClick={() => decreaseQuantity(item.id)}
                        className={styles.quantity__btn}
                    >
                        <QuantityBtnMinus />
                    </button>
                    <span className={styles.quantity__value}>{quantity}</span>
                    <button
                        onClick={() => increaseQuantity(item.id)}
                        className={styles.quantity__btn}
                    >
                        <QuantityBtnPlus />
                    </button>
                </div>
            </div>
            <div className={styles.item__info}>
                <h3 className={styles.item__title}>{title}</h3>
                <span className={styles.item__price}>{price}</span>
            </div>
            <div className={styles.item__sidebar}>
                <button
                    onClick={() => removeFromCart(item.id)}
                    className={styles.item__delete_btn}
                >
                    <DeleteIcon />
                </button>
                <span className={styles.item__sum}>{price * quantity}</span>
            </div>
        </div>
    );
};
