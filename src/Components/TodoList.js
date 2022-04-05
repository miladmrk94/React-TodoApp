import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import styles from "./TodoList.module.scss";
import { motion } from "framer-motion";

const TodoList = ({ todos, onComplete, onDelete, onEdit, updateTodo }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });
  const editTodo = (newValue) => {
    updateTodo(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };
  if (todos.length === 0) {
    return <h3>Add Some Todo</h3>;
  }
  return (
    <div className={styles.box}>
      {edit.id ? (
        <TodoForm addTodoHandler={editTodo} edit={edit} />
      ) : (
        todos.map((item) => {
          return (
            <motion.div>
              <Todo
                layoutId={item.id}
                textClassName={
                  item.isCompleted ? styles.completed : styles.NOcompleted
                }
                completedColor={
                  item.isCompleted ? " rgb(14, 172, 74)" : "antiquewhite"
                }
                key={item.id}
                text={item.text}
                onComplete={() => onComplete(item.id)}
                onDelete={() => onDelete(item.id)}
                onEdit={() => setEdit(item)}
              />
            </motion.div>
          );
        })
      )}
    </div>
  );
};

export default TodoList;
