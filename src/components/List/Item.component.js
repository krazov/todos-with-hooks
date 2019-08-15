import React from 'react';
import styles from './Item.module.css';

const Item = ({ id, task, removeTodo }) => (
    <li>
        <span>
            <span className={styles.id}>#{id}</span> {task}
        </span>
        <span>
            <button>Done</button>
            <button onClick={() => removeTodo(id)}>Remove</button>
        </span>
    </li>
);

export default Item;