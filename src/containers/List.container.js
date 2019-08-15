import React from 'react';
import useTodosAtom from '../domains/todos/todos.atom';
import { removeTodoAction } from '../domains/todos/todos.actions';
import List from '../components/List/List.component';

const ListContainer = () => {
    const [state, dispatch] = useTodosAtom();

    return (
        <List
            todos={state}
            removeTodo={(...args) => dispatch(removeTodoAction(...args))}
        />
    );
};

export default ListContainer;