import React from "react";
import styles from "./Todo.module.scss";
const Todo = ({ text, onComplete, onEdit, textClassName, onDelete }) => {
  return (
    <div className={styles.box}>
      <button onClick={onComplete}>Complete</button>
      <h4 className={textClassName}>{text}</h4>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Todo;
