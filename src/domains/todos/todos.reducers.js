import { todo } from "./todos.helpers";
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./todos.constants";

export const todosReducer = (state, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return [...state, todo(payload)];
        case REMOVE_TODO:
            return state.filter(({ id }) => id != payload);
        case UPDATE_TODO:
            return state;
        default:
            return state;
    }
}