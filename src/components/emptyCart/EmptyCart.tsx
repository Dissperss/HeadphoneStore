import { Link } from "react-router-dom";
import styles from "./EmptyCart.module.css";

export const EmptyCart = () => {
    return (
        <div className={styles.empty}>
            <h2 className={styles.title}>Корзина пуста</h2>
            <p className={styles.text}>
                Добавьте товары, чтобы продолжить покупки
            </p>
            <Link to="/" className={styles.link}>
                Вернуться к каталогу
            </Link>
        </div>
    );
};
