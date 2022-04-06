import React, { useEffect, useState } from "react";
import FilterTodo from "./FilterTodo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styles from "./TodoApp.module.scss";
import moment from "moment";
import _ from "lodash";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filterStatus, setFilterStatus] = useState([]);

  useEffect(() => {
    filterTodos(status);
  }, [todos, status]);

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
      date: moment(),
    };
    setTodos([...todos, newTodo]);
  };

  const onComplete = (id) => {
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
    MyTodo.date = moment();
    const allTodos = [...todos];
    allTodos[index] = MyTodo;
    setTodos(allTodos);
  };

  const filterTodos = (status) => {
    if (status === "All") {
      return setFilterStatus(todos);
    } else if (status === "completed") {
      const filter = todos.filter((i) => {
        return i.isCompleted === true;
      });
      setFilterStatus(filter);
    } else if (status === "sort") {
      const sort = _.orderBy(todos, ["date"], ["desc"]);
      console.log(sort);
      return setFilterStatus(sort);
    } else {
      const filter = todos.filter((i) => {
        return i.isCompleted === false;
      });
      setFilterStatus(filter);
    }
  };
  const selectHandler = (e) => {
    setStatus(e.target.value);
    filterTodos(e.target.value);
  };

  return (
    <div className={styles.box}>
      <FilterTodo
        item={todos.filter((i) => !i.isCompleted).length}
        selectHandler={selectHandler}
        status={status}
      />
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={filterStatus}
        onComplete={onComplete}
        onDelete={onDelete}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
