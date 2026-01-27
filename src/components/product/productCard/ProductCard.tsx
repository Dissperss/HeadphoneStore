import { StarIcon } from "@/icons/StarIcon";
import { Modal } from "@/components/modal";
import { ProductModal } from "../productModal";

import { useModalState, useCart } from "@/hooks";
import styles from "./ProductCard.module.css";
import commonStyles from "../Product.module.css";

export type ProductCardProps = {
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
    price,
    description,
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
                <div className={commonStyles.card__inner}>
                    <div className={commonStyles.card__img_wrapper}>
                        <img
                            className={commonStyles.card__img}
                            src={img}
                            alt={title}
                            onClick={onOpen}
                        />
                    </div>
                    <div className={commonStyles.card__info}>
                        <h3
                            className={commonStyles.card__title}
                            onClick={onOpen}
                        >
                            {title}
                        </h3>
                        <div className={commonStyles.card__prices}>
                            <span className={commonStyles.card__price_actual}>
                                {actual} ₽
                            </span>
                            {previous && (
                                <span className={commonStyles.card__price_old}>
                                    {previous} ₽
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <div className={commonStyles.card__footer}>
                    <div className={commonStyles.rate}>
                        <StarIcon />
                        <span className={commonStyles.card__rating}>
                            {rate}
                        </span>
                    </div>
                    <button
                        className={commonStyles.card__btn}
                        onClick={handleAddToCart}
                    >
                        Купить
                    </button>
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ProductModal
                    onOpen={onOpen}
                    id={id}
                    img={img}
                    title={title}
                    description={description}
                    price={price}
                    rate={rate}
                    handleAddToCart={handleAddToCart}
                />
            </Modal>
        </>
    );
};
