import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input) => {
    console.log(input);
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const onComplete = (id) => {
    console.log("id:", id);
    const index = todos.findIndex((item) => {
      return item.id === id;
    });
    const MyTodo = { ...todos[index] };
    MyTodo.isCompleted = !MyTodo.isCompleted;
    const allTodos = [...todos];
    allTodos[index] = MyTodo;
    setTodos(allTodos);
  };

  const onDelete = (id) => {
    const filter = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(filter);
  };

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((item) => {
      return item.id === id;
    });
    const MyTodo = { ...todos[index] };
    MyTodo.text = newValue;
    const allTodos = [...todos];
    allTodos[index] = MyTodo;
    setTodos(allTodos);
  };

  return (
    <div>
      ToDo App
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todos}
        onComplete={onComplete}
        onDelete={onDelete}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
