import "./App.css";
import React, { useState } from "react";

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
  };

  return (
    <div className="App">
      <h1>TODO App</h1>
      <input type="text" value={value} onChange={handleChange} />
      <p>{value}</p>
      <button onClick={add}>追加</button>
    </div>
  );
};

export default TodoApp;
