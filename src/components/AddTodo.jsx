import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (text.trim().length == 0) {
      return;
    }
    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
  };

  return (
    <>
      <input value={text} placeholder="Add todo" onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default AddTodo;
