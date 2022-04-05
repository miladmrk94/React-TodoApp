import React from "react";
import styles from "./FilterTodo.module.scss";
const FilterTodo = ({ item, selectHandler, status }) => {
  return (
    <div>
      <h3>{item ? `${item} is Not Completed` : "set Todos"}</h3>
      <select
        onChange={selectHandler}
        value={status}
        className={styles.form__field}
      >
        <option value="All">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default FilterTodo;
