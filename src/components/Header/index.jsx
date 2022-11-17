import React from 'react';
import { Container } from 'components/Container';
import telegram from 'assets/img/icons/telegram.svg';
import phone from 'assets/img/icons/phone.svg';
import whatsapp from 'assets/img/icons/whatsapp.svg';
import { Phone } from 'components/UI/Phone';
import logo from 'assets/img/logo_welbex.png';

import styles from './style.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__body}>
                    <div className={styles.header__logo} href="/">
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                        <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
                    </div>
                    <nav
                        className={`${styles.header__navbar} ${styles.navbar}`}
                    >
                        <a className={styles.navbar__item} href="/">
                            Услуги
                        </a>
                        <a className={styles.navbar__item} href="/">
                            Виджеты
                        </a>
                        <a className={styles.navbar__item} href="/">
                            Интеграции
                        </a>
                        <a className={styles.navbar__item} href="/">
                            Кейсы
                        </a>
                        <a className={styles.navbar__item} href="/">
                            Сертификаты
                        </a>
                    </nav>
                    <div className={styles.header__contacts}>
                        <Phone number="+7 555 555-55-55" />
                        <div className={styles.header__contacts_social}>
                            <a href="/">
                                <img src={telegram} alt="telegram" />
                            </a>
                            <a href="/">
                                <img src={phone} alt="phone" />
                            </a>
                            <a href="/">
                                <img src={whatsapp} alt="whatsapp" />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};
