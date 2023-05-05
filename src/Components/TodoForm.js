import React, { useState } from 'react';

const TodoForm = ({ handleAddItem }) => {
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        handleAddItem(event, text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className='todo-input'>
            <input type="text" value={text} onChange={handleTextChange} placeholder='Your notes' />
            <button type='submit'>+</button>
        </form>
    )
}

export default TodoForm;