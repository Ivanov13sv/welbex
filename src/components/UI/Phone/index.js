import React from 'react';
import styles from './style.module.scss';

export const Phone = ({number}) => {
    return (
        <a className={styles.phone} href={`tel: ${number}`}>
            {number}
        </a>
    );
};
