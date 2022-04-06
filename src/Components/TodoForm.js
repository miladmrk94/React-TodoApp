import React, { useState, useRef, useEffect } from "react";
import styles from "./TodoForm.module.scss";
import { HiPlusCircle, HiOutlinePencilAlt } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TodoForm = (props) => {
  const [todo, setTodo] = useState("");
  const selectInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!todo) {
      toast.warn("please Enter Text", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      ;{/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default TodoForm;
