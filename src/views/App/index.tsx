import React from 'react';

import styles from './index.module.scss'

export const App: React.FC = () => {
    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>To Do App</h1>
            {/* Секция для добавления */}
            <section className={styles.articleSection}>

            </section>
            {/* Секция для отображённых списков задач */}
            <section className={styles.articleSection}>

            </section>
        </article>
    );
}