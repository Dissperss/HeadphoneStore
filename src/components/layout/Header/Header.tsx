// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks";
import { CartIcon } from "@/components/cartIcon";
import { FavoriteIcon } from "@/components/favoriteIcon";
import { MainLogo } from "@/icons/index";
import styles from "./Header.module.css";

export const Header = () => {
    const cartCount = 2;
    // const { cartItems } = useContext(CartContext);
    const { totalCount } = useCart();

    return (
        <header className={`container ${styles.header}`}>
            <div className={styles.header__inner}>
                <Link to="/">
                    <MainLogo />
                </Link>
                <nav className={styles.menu}>
                    <FavoriteIcon count={cartCount} />

                    <CartIcon count={totalCount} />
                </nav>
            </div>
        </header>
    );
};
