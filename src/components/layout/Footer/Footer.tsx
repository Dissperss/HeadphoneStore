import { Link } from "react-router-dom";
import {
    EarthIcon,
    VkIcon,
    TgIcon,
    WhatsUpIcon,
    MainLogo,
} from "@/icons/index";
import { routes } from "@/router/routes";

import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={`container ${styles.footer}`}>
            <div className={styles.footer__inner}>
                <Link to={routes.Home}>
                    <MainLogo />
                </Link>

                <nav className={styles.footer__menu}>
                    <a href="#" className={styles.menu__link}>
                        Избранное
                    </a>
                    <Link to={routes.Cart} className={styles.menu__link}>
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
                        <span className={styles.language}>Каз</span>
                        <span className={`${styles.language} ${styles.active}`}>
                            Рус
                        </span>
                        <span className={styles.language}>Eng</span>
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
