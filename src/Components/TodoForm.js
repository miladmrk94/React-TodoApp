import React, { useState, useRef, useEffect } from "react";
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
          <form onSubmit={submitHandler}>
            <input
              type="text"
              value={todo}
              onChange={changeHandler}
              ref={selectInput}
            />
            <button type="submit">Update</button>
          </form>
        </>
      ) : (
        <>
          <form onSubmit={submitHandler}>
            <input type="text" value={todo} onChange={changeHandler} />
            <button type="submit">Add</button>
          </form>
        </>
      )}
    </div>
  );
};

export default TodoForm;
