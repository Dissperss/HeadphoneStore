// import styles from "./ProductCard.module.css";

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
        <div className="card">
            <div className="card__inner">
                <img className="card__img" src={img} alt={title} />
                <h3 className="card__title">{title}</h3>
                <div className="card__prices">
                    <span className="card__price">{actual} ₽</span>
                    {previous && (
                        <span className="card__price-old">{previous} ₽</span>
                    )}
                </div>

                <div className="card__footer">
                    <StarIcon />
                    <span className="card__rating">{rate}</span>
                    <button className="card__btn">Купить</button>
                </div>
            </div>
        </div>
    );
};
