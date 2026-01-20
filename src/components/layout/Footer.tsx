import { Link } from "react-router-dom";
import { EarthIcon, VkIcon, TgIcon, WhatsUpIcon, MainLogo } from "../icons";
import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footer__inner}`}>
                <MainLogo />

                <nav className={styles.footer__menu}>
                    <a href="#" className={styles.menu__link}>
                        Избранное
                    </a>
                    <Link to="/cart" className={styles.menu__link}>
                        Корзина
                    </Link>
                    <a href="#" className={styles.menu__link}>
                        Контакты
                    </a>
                </nav>
                <div className={styles.footer__tools}>
                    <span className={styles.condition}>Условия сервиса</span>
                    <div className={styles.languages}>
                        <EarthIcon />
                        <span className={styles.languages__ru}>Рус</span>
                        <span className={styles.languages__eng}>Eng</span>
                    </div>
                </div>
                <div className={styles.footer__socials}>
                    <VkIcon />
                    <TgIcon />
                    <WhatsUpIcon />
                </div>
            </div>
        </footer>
    );
};
