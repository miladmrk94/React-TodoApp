import React from "react";
import styles from "./Todo.module.scss";
import { motion } from "framer-motion";

const Todo = ({ text, onComplete, onEdit, textClassName, onDelete }) => {
  return (
    <motion.div
      className={styles.box}
      animate={{
        x: 0,
        y: 30,
        scale: 1,
        rotate: 0,
      }}
      transition={{
        ease: "easeOut",
        duration: 0.2,
        x: 0,
        y: 30,
        scale: 1,
        rotate: 0,
      }}
    >
      <motion.button
        initial={{ x: "5%" }}
        animate={{ x: "calc(20vw - 80%)" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        style={{ originX: 0.5 }}
        onClick={onComplete}
      >
        Complete
      </motion.button>
      <h4 className={textClassName}>{text}</h4>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </motion.div>
  );
};

export default Todo;
