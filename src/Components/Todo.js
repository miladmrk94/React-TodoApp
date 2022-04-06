import React from "react";
import styles from "./Todo.module.scss";
import { motion } from "framer-motion";
import { HiXCircle, HiOutlinePencilAlt, HiCheckCircle } from "react-icons/hi";

const Todo = ({
  text,
  onComplete,
  onEdit,
  textClassName,
  onDelete,
  completedColor,
  onClick,
  time,
}) => {
  return (
    <motion.div
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
      onClick={onClick}
      className={styles.box}
    >
      <div className={styles.boxOne}>
        <div className={styles.BTNs}>
          <HiXCircle onClick={onDelete} size="30px" color=" rgb(240, 74, 74)" />

          <HiCheckCircle
            onClick={onComplete}
            size="30px"
            color={completedColor}
          />
          <HiOutlinePencilAlt
            onClick={onEdit}
            size="25px"
            color=" rgb(255, 238, 2)"
          />
        </div>
        <span>{time}</span>
      </div>

      <h4 className={textClassName}>{text}</h4>
    </motion.div>
  );
};

export default Todo;
