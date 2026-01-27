import { ProductCard } from "@/components/productCard";
import styles from "./ProductList.module.css";

type Product = {
    id: number;
    img: string;
    title: string;
    description: string;
    price: {
        actual: number;
        previous?: number;
    };
    rate: number;
};

type ProductListProps = {
    data: Product[];
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
        <ul className={styles.products__list}>
            {data.map((product) => (
                <li key={product.id} className={styles.products__item}>
                    <ProductCard
                        id={product.id}
                        img={product.img}
                        description={product.description}
                        title={product.title}
                        price={product.price}
                        rate={product.rate}
                    />
                </li>
            ))}
        </ul>
    );
};
