import { ProductList } from "../components/productList";
import { headphones } from "../stabs/products";

export const HomePage = () => {
    return (
        <>
            <h3 className="title">Наушники</h3>
            <ProductList data={headphones} />
        </>
    );
};
