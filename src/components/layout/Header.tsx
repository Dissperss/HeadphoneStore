// import { Link } from "react-router-dom";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart/cartContext";
import { CartIcon } from "../cartIcon";
import { FavoriteIcon } from "../favoriteIcon";
import { MainLogo } from "../icons";
import styles from "./Header.module.css";

export const Header = () => {
    const cartCount = 2; // Временно
    const { cartItems } = useContext(CartContext);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.header__inner}`}>
                <Link to="/">
                    <MainLogo />
                </Link>
                <nav className={styles.menu}>
                    <FavoriteIcon count={cartCount} />

                    <CartIcon count={cartItems.length} />
                </nav>
            </div>
        </header>
    );
};
