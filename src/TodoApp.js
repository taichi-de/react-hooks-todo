import "./App.css";
import React, { useState } from "react";
import TodoElement from "./TodoElement";
import AddTodo from "./AddTodo";

const TodoApp = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const add = () => {
    const newTodo = [...todoList, value];
    setTodoList(newTodo);
    setValue("");
  };

  const handleDelete = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <h1>TODO App</h1>
      <AddTodo value={value} onChange={handleChange} add={add} />
      <ul>
        {todoList.map((todo) => (
          <TodoElement
            key={todo.id}
            content={todo.content}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
