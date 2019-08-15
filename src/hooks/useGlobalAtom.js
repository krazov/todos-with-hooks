import { useState, useEffect } from 'react';

// based on the final solution from here:
// https://medium.com/javascript-in-plain-english/state-management-with-react-hooks-no-redux-or-context-api-8b3035ceecf8

const createSetState = (atom, reducer) => (action) => {
    atom.state = reducer(atom.state, action);

    atom.listeners.forEach((lowlevelSetState) => {
        lowlevelSetState(atom.state);
    });
};

const useCustom = (atom) => {
    const newListener = useState()[1];

    useEffect(() => {
        atom.listeners.push(newListener);

        return () => {
            atom.listeners = atom.listeners.filter(listener => listener !== newListener);
        };
    }, []);

    return [atom.state, atom.setState];
};

const atoms = {};
const useGlobalAtom = (namespace, initialState, reducer) => {
    if (!atoms[namespace]) {
        atoms[namespace] = atoms[namespace] || {
            state: initialState,
            listeners: [],
        };

        atoms[namespace].setState = createSetState(atoms[namespace], reducer);
    }

    return useCustom(atoms[namespace]);
};

export default useGlobalAtom;