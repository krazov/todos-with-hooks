import React from 'react';
import useTodosAtom from '../domains/todos/todos.atom';
import Form from '../components/Form/form.component';
import { addTodoAction } from '../domains/todos/todos.actions';

const FormContainer = () => {
    const [, dispatch] = useTodosAtom();

    return (
        <Form
            addTodo={(...args) => dispatch(addTodoAction(...args))}
        />
    );
};

export default FormContainer;