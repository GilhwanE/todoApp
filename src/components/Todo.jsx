import React from 'react';

const Todo = ({ todo, onUpdate, onDelete }) => {
  const handleDelete = () => {
    onDelete(todo);
  };
  return (
    <li>
      <input type="checkbox" id="checkbox" />
      <label>{todo.text}</label>
      <button onClick={handleDelete}>지우기</button>
    </li>
  );
};

export default Todo;
