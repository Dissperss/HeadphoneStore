import { useContext } from "react";
import { StarIcon } from "../icons";

import { CartContext } from "@/context/cart/cartContext";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
    id: number;
    img: string;
    title: string;
    price: Price;
    rate: number;
};

type Price = {
    actual: number;
    previous?: number;
};

export const ProductCard = ({
    img,
    title,
    price,
    rate,
    id,
}: ProductCardProps) => {
    const { actual, previous } = price;
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart({
            id,
            title,
            price: actual,
            img,
        });
    };

    return (
        <div className={styles.card}>
            <div className={styles.card__inner}>
                <div className={styles.card__img_wrapper}>
                    <img className={styles.card__img} src={img} alt={title} />
                </div>
                <div className={styles.card__info}>
                    <h3 className={styles.card__title}>{title}</h3>
                    <div className={styles.card__prices}>
                        <span className={styles.card__price_actual}>
                            {actual} ₽
                        </span>
                        {previous && (
                            <span className={styles.card__price_old}>
                                {previous} ₽
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.card__footer}>
                <div className={styles.rate}>
                    <StarIcon />
                    <span className={styles.card__rating}>{rate}</span>
                </div>
                <button className={styles.card__btn} onClick={handleAddToCart}>
                    Купить
                </button>
            </div>
        </div>
    );
};
