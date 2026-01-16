import { ProductCard } from "../productCard";

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

    const elements = data.map((item) => {
        const { id, ...itemProps } = item;
        return <ProductCard key={id} {...itemProps} />;
    });

    return <ul className="products__list">{elements}</ul>;
};
