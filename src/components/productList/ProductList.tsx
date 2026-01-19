import { ProductCard } from "../productCard";
import styles from "./ProductList.module.css";

type ProductListProps = {
    data: Product[];
};

type Product = {
    id: number;
    img: string;
    title: string;
    price: {
        actual: number;
        previous?: number;
    };
    rate: number;
};

export const ProductList = ({ data }: ProductListProps) => {
    if (data.length === 0) {
        return <p className="nothing">Nothing found</p>;
    }

    // const elements = data.map((item) => {
    //     const { id, ...itemProps } = item;
    //     return <ProductCard key={id} {...itemProps} />;
    // });

    return (
        <ul className={styles["products__list"]}>
            {data.map(({ id, ...itemProps }) => (
                <li key={id} className={styles["products__item"]}>
                    <ProductCard {...itemProps} />
                </li>
            ))}
        </ul>
    );
};
