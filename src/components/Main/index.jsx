import { Container } from 'components/Container';
import React from 'react';
import styles from './style.module.scss';

export const Main = () => {
    return (
        <main className={styles.main}>
            <Container>
                <section className={styles.main__content}>
                    <div>
                        <h1 className={styles.main__title}>
                            Зарабатывайте больше
                            <span>с WELBEX</span>
                        </h1>
                        <p className={styles.main__content_discr}>
                            Развиваем и контролируем продажи за вас
                        </p>
                    </div>

                    <div
                        className={`${styles.main__content_gift} ${styles.gift}`}
                    >
                        <p>
                            Вместе с <span>бесплатной</span>
                            <span> консультацией</span> мы дарим:
                        </p>
                        <ul className={styles.gift__shortList}>
                            <li>Skype Аудит</li>
                            <li>30 виджетов</li>
                            <li>Dashboard</li>
                            <li>Месяц amocrm</li>
                        </ul>
                        <ul className={styles.gift__fullList}>
                            <li>
                                <div>Виджеты</div>
                                <span className={styles.gift__fullList_discr}>
                                    30 готовых решений
                                </span>
                            </li>

                            <li>
                                <div>Dashboard</div>
                                <span>с показателями вашего бизнеса</span>
                            </li>
                            <li>
                                <div>Skype Аудит</div>
                                <span>
                                    отдела продаж <br />
                                     и CRM системы
                                </span>
                            </li>
                            <li>
                                <div>35 дней</div>
                                <span>использования CRM</span>
                            </li>
                        </ul>
                        <button className={styles.main__btn}>Получить консультацию</button>
                    </div>
                </section>
            </Container>
            <div className={styles.main__bg}>
                <div className={styles.main__bg_redball} />
                <div className={styles.main__bg_redSmBall} />
                <div className={styles.main__bg_purpleball} />
                <div className={styles.main__bg_redlight} />
                <div className={styles.main__bg_purplelight} />
                <div className={styles.main__bg_glass} />
                <div className={styles.main__bg_noise} />
            </div>
        </main>
    );
};
