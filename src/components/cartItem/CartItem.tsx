// import { headphones } from "../../stabs/products";
// Потом подставляем headphones.title/price/img итд.
import { DeleteIcon } from "../icons";
import { QuantityBtnMinus, QuantityBtnPlus } from "../icons";
import appleByzS852 from "../../assets/img/apple_byz_s852ipng.png";

import styles from "./CartItem.module.css";

export const CartItem = () => {
    return (
        <div className={styles.cart__item}>
            <div className={styles.item__inner}>
                <img
                    src={appleByzS852}
                    alt="earpods"
                    className={styles.item__img}
                />
                <div className={styles.item__quantity}>
                    <button className={styles.quantity__btn}>
                        <QuantityBtnMinus />
                    </button>
                    <span className={styles.quantity__value}>1</span>
                    <button className={styles.quantity__btn}>
                        <QuantityBtnPlus />
                    </button>
                </div>
            </div>
            <div className={styles.item__info}>
                <h3 className={styles.item__title}>Apple BYZ S852I</h3>
                <span className={styles.item__price}>2 927 ₽</span>
            </div>
            <div className={styles.item__sidebar}>
                <button className={styles.item__delete_btn}>
                    <DeleteIcon />
                </button>
                <span className={styles.item__sum}> 2 927 ₽</span>
            </div>
        </div>
    );
};
