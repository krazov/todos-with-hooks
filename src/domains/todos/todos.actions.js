import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./todos.constants";

export const addTodoAction = (todo) => ({
    type: ADD_TODO,
    payload: todo,
});

export const removeTodoAction = (id) => ({
    type: REMOVE_TODO,
    payload: id,
});

export const updateTodoAction = (todo) => ({
    type: UPDATE_TODO,
    payload: todo
});