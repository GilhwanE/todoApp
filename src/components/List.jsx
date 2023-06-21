import React, { useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

export default function List() {
  const [todos, setTodos] = useState([
    {
      id: '1',
      text: '청소하기',
      status: 'active',
    },
    {
      id: '2',
      text: '요리하기',
      status: 'active',
    },
  ]);
  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleUpdate = (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };

  // 지우기 버튼을 클릭하면 todos에 있는 todo 값이 id값과 deteld 같지않다면 필터
  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };

  return (
    <section>
      <ul>
        {todos.map((item) => {
          return (
            <Todo
              key={item.id}
              todo={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          );
        })}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
