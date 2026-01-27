import { StarIcon } from "@/icons/StarIcon";
import { Modal } from "@/components/modal";

import { useModalState, useCart } from "@/hooks";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
    id: number;
    img: string;
    title: string;
    price: Price;
    rate: number;
    description: string;
};

type Price = {
    actual: number;
    previous?: number;
};

export const ProductCard = ({
    img,
    title,
    description,
    price,
    rate,
    id,
}: ProductCardProps) => {
    const { actual, previous } = price;
    const { addToCart } = useCart();
    const { isOpen, onOpen, onClose } = useModalState();

    const handleAddToCart = () => {
        addToCart({
            id,
            title,
            price: actual,
            img,
        });
    };

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card__inner}>
                    <div className={styles.card__img_wrapper}>
                        <img
                            className={styles.card__img}
                            src={img}
                            alt={title}
                            onClick={onOpen}
                        />
                    </div>
                    <div className={styles.card__info}>
                        <h3 className={styles.card__title} onClick={onOpen}>
                            {title}
                        </h3>
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
                    <button
                        className={styles.card__btn}
                        onClick={handleAddToCart}
                    >
                        Купить
                    </button>
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={onClose}>
                <div className={styles.card__inner}>
                    <div className={styles.card__img_wrapper}>
                        <img
                            className={styles.card__img}
                            src={img}
                            alt={title}
                        />
                    </div>
                    <p className={styles.card__text}>{description}</p>
                    <div className={styles.card__info}>
                        <h3 className={styles.card__title} onClick={onOpen}>
                            {title}
                        </h3>
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
                    <button
                        className={styles.card__btn}
                        onClick={handleAddToCart}
                    >
                        Купить
                    </button>
                </div>
            </Modal>
        </>
    );
};
