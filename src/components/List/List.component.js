import React from 'react';
import Item from './Item.component';
import styles from './List.module.css';

const List = ({ todos, removeTodo }) => {
    return todos.length
        ? (
            <ul className={styles.list}>
                {
                    todos.map(
                        ({ id, task }) =>
                            <Item
                                key={id}
                                id={id}
                                task={task}
                                removeTodo={removeTodo}
                            />
                    )
                }
            </ul>
        )
        : (
            <p>Nothing yet</p>
        );
};

export default List;