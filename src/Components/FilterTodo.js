import React from "react";
const FilterTodo = ({ item, selectHandler, status }) => {
  return (
    <div>
      <h3>{item} is Not Completed</h3>
      <select onChange={selectHandler} value={status}>
        <option value="All">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default FilterTodo;
