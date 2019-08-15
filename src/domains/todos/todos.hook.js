import { useReducer } from 'react';
import { todosReducer, ADD_TODO } from './todos.reducers';

const initialList = [];

const useTodosHook = () => {
    const [state, dispatch] = useReducer(todosReducer, initialList);

    return [state, {
        addTodo: (todo) => {
            dispatch({ type: ADD_TODO, payload: todo });
        },
        removeTodo: (id) => {
            dispatch({ type: null, payload: null })
        },
    }];
};

export default useTodosHook;