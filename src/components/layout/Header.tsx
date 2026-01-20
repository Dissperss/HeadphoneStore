// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartIcon } from "../cartIcon";
import { FavoriteIcon } from "../favoriteIcon";
import { MainLogo } from "../icons";
import styles from "./Header.module.css";

export const Header = () => {
    const cartCount = 2; // Временно

    return (
        <header className={styles.header}>
            <div className={`container ${styles.header__inner}`}>
                <MainLogo />
                <nav className={styles.menu}>
                    <FavoriteIcon count={cartCount} />

                    <Link to="/cart">
                        <CartIcon count={cartCount} />
                    </Link>
                </nav>
            </div>
        </header>
    );
};
