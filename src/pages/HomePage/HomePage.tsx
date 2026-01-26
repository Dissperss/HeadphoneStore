import { ProductList } from "@/components/productList";
import { headphones } from "@/stabs/products";
import styles from "./HomePage.module.css";

export const HomePage = () => {
    const wired = headphones.filter((item) => item.type === "wired");

    const wireless = headphones.filter((item) => item.type === "wireless");

    return (
        <div className={styles.catalog}>
            <h2 className={styles.title}>Наушники</h2>
            <ProductList data={wired} />

            <h2 className={styles.subtitle}>Беспроводные наушники</h2>
            <ProductList data={wireless} />
        </div>
    );
};
