import { ProductList } from "@/components/product/productList";
import { getHeadphonesByType } from "./Utils";
import styles from "./HomePage.module.css";

export const HomePage = () => {
    return (
        <div className={styles.catalog}>
            <h2 className={styles.title}>Наушники</h2>
            <ProductList data={getHeadphonesByType("wired")} />

            <h2 className={styles.subtitle}>Беспроводные наушники</h2>
            <ProductList data={getHeadphonesByType("wireless")} />
        </div>
    );
};
