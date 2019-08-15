import React, { useState } from 'react';

const Form = ({ addTodo }) => {
    const [input, updateInput] = useState('');

    const changeHandler = (event) => {
        event.preventDefault();
        updateInput(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        addTodo(input);
        updateInput('');
    }

    return (
        <form onSubmit={submitHandler}>
            <fieldset>
                <legend>A new task</legend>
                <input type="text" value={input} onChange={changeHandler} />
                <button>Add id</button>
            </fieldset>
        </form>
    )
};

export default Form;