import commonStyles from "../Product.module.css";
import { StarIcon } from "@/components/icons";
import { type ProductCardProps } from "../productCard/ProductCard";

type ProductModalProps = {
    onOpen: () => void;
    handleAddToCart: () => void;
} & ProductCardProps;

export const ProductModal = ({
    onOpen,
    img,
    title,
    description,
    price,
    rate,
    handleAddToCart,
}: ProductModalProps) => {
    const { actual, previous } = price;
    return (
        <>
            <div className={commonStyles.card__inner}>
                <div className={commonStyles.card__img_wrapper}>
                    <img
                        className={commonStyles.card__img}
                        src={img}
                        alt={title}
                    />
                </div>
                <p className={commonStyles.card__text}>{description}</p>
                <div className={commonStyles.card__info}>
                    <h3 className={commonStyles.card__title} onClick={onOpen}>
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
                    <span className={commonStyles.card__rating}>{rate}</span>
                </div>
                <button
                    className={commonStyles.card__btn}
                    onClick={handleAddToCart}
                >
                    Купить
                </button>
            </div>
        </>
    );
};
