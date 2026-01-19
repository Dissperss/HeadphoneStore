import { ProductList } from "../components/productList";
import { headphones } from "../stabs/products";

export const HomePage = () => {
    const wired = headphones.filter((item) => item.type === "wired");

    const wireless = headphones.filter((item) => item.type === "wireless");

    return (
        <>
            <h2 className="title">Наушники</h2>
            <ProductList data={wired} />

            <h2 className="title">Беспроводные наушники</h2>
            <ProductList data={wireless} />
        </>
    );
};
