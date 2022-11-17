import { Container } from 'components/Container';
import React from 'react';
import telegram from 'assets/img/icons/telegram.svg';
import phone from 'assets/img/icons/phone.svg';
import whatsapp from 'assets/img/icons/whatsapp.svg';
import { Phone } from 'components/UI/Phone';
import styles from './style.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <nav className={`${styles.footer__nav} ${styles.nav}`}>
                    <div className={styles.nav__block}>
                        <span className={styles.nav__block_title}>
                            О КОМПАНИИ
                        </span>
                        <a href="/" className={styles.nav__block_item}>
                            Партнёрская программа
                        </a>
                        <a href="/" className={styles.nav__block_item}>
                            Вакансии
                        </a>
                    </div>
                    <div className={`${styles.nav__block} ${styles.menu}`}>
                        <span
                            className={`${styles.nav__block_title} ${styles.menu__title}`}
                        >
                            МЕНЮ
                        </span>
                        <div>
                            <a href="/" className={styles.nav__block_item}>
                                Расчёт стоимости
                            </a>
                            <a href="/" className={styles.nav__block_item}>
                                Услуги
                            </a>
                            <a href="/" className={styles.nav__block_item}>
                                Виджеты
                            </a>
                            <a href="/" className={styles.nav__block_item}>
                                Интеграции
                            </a>
                            <a href="/" className={styles.nav__block_item}>
                                Наши клиенты
                            </a>
                        </div>
                        <div>
                            <a href="/" className={styles.nav__block_item}>
                                Благодарность клиентов
                            </a>
                            <a href="/" className={styles.nav__block_item}>
                                {' '}
                                Кейсы
                            </a>
                            <a href="/" className={styles.nav__block_item}>
                                Сертификаты
                            </a>
                            <a href="/" className={styles.nav__block_item}>
                                Блог на Youtube
                            </a>
                            <a href="/" className={styles.nav__block_item}>
                                Вопрос / Ответ
                            </a>
                        </div>
                    </div>
                    <div className={`${styles.nav__block} ${styles.contact}`}>
                        <span className={styles.nav__block_title}>
                            Контакты
                        </span>

                        <Phone number={'+7 555 555-55-55'} />
                        <div className={styles.contact__social}>
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
                        <address className={styles.contact__address}>
                            Москва, Путевой проезд 3с1, к 902
                        </address>
                    </div>
                    <p className={styles.footer__privacy}>
                        ©WELBEX 2022. Все права защищены.
                        <a href="/">Политика конфиденциальности</a>
                    </p>
                </nav>
            </Container>
        </footer>
    );
};
