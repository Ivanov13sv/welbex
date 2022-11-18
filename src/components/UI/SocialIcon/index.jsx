import React from 'react';
import styles from './style.module.scss';

export const SocialIcon = ({ icon, alt ,href }) => {
    return (
        <a href={href} className={styles.icon}>
            <img src={icon} alt={alt} />
        </a>
    );
};
