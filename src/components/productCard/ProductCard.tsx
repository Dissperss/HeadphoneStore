import styles from "./ProductCard.module.css";

import { StarIcon } from "../icons";

type ProductCardProps = {
    img: string;
    title: string;
    price: Price;
    rate: number;
};

type Price = {
    actual: number;
    previous?: number;
};

export const ProductCard = ({ img, title, price, rate }: ProductCardProps) => {
    const { actual, previous } = price;
    return (
        <div className={styles.card}>
            <div className={styles["card__inner"]}>
                <img className={styles["card__img"]} src={img} alt={title} />
                <div className={styles["card__info"]}>
                    <h3 className={styles["card__title"]}>{title}</h3>
                    <div className={styles["card__prices"]}>
                        <span className={styles["card__price-actual"]}>
                            {actual} ₽
                        </span>
                        {previous && (
                            <span className={styles["card__price-old"]}>
                                {previous} ₽
                            </span>
                        )}
                    </div>
                </div>

                <div className={styles["card__footer"]}>
                    <div className={styles.rate}>
                        <StarIcon />
                        <span className={styles["card__rating"]}>{rate}</span>
                    </div>
                    <button className={styles["card__btn"]}>Купить</button>
                </div>
            </div>
        </div>
    );
};
