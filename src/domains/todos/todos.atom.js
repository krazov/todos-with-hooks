import useGlobalAtom from '../../hooks/useGlobalAtom';
import { todosReducer } from './todos.reducers';

const initialState = [{ id: 0, task: 'Task zero', done: false }];

const namespace = Symbol('todos');
const useTodosAtom = () => useGlobalAtom(namespace, initialState, todosReducer);

export default useTodosAtom;