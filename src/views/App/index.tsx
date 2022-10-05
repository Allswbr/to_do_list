import React from 'react';

import { useToDoStore } from '../../data/stores/useToDoStore'

import styles from './index.module.scss'

export const App: React.FC = () => {
    const [
        tasks,
        createTask,
        updateTask,
        removeTask
    ] = useToDoStore( state => [
        state.tasks,
        state.createTask,
        state.updateTask,
        state.removeTask
        ]
    );

    // createTask('newtask');

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