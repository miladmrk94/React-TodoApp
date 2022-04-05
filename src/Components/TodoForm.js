import React, { useState, useRef, useEffect } from "react";
import styles from "./TodoForm.module.scss";
import { HiPlusCircle, HiOutlinePencilAlt } from "react-icons/hi";

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");
  const selectInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!todo) {
      alert("Enter Todo !");
      return;
    }
    props.addTodoHandler(todo);
    setTodo("");
  };

  const changeHandler = (e) => {
    console.log(e.target.value);
    setTodo(e.target.value);
  };

  useEffect(() => {
    props.edit && selectInput.current.focus();
  }, []);

  return (
    <div>
      {props.edit ? (
        <>
          <form onSubmit={submitHandler} className={styles.input}>
            <input
              type="text"
              value={todo}
              onChange={changeHandler}
              ref={selectInput}
              className={styles.form__field}
            />
            <button className={styles.addBtn}>
              <HiOutlinePencilAlt type="submit" size="30px" color="#38ef7d" />
            </button>
          </form>
        </>
      ) : (
        <>
          <form onSubmit={submitHandler} className={styles.input}>
            <input
              type="text"
              value={todo}
              onChange={changeHandler}
              className={styles.form__field}
            />
            <button className={styles.addBtn}>
              <HiPlusCircle type="submit" size="30px" color="#38ef7d" />
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default TodoForm;
