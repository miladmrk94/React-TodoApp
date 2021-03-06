import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import moment from "moment";
const Header = () => {
  const [time, setTime] = useState();

  const timeHandler = () => {
    setTime(moment().format("dddd"));
  };

  useEffect(() => {
    timeHandler();
  }, [time]);

  return (
    <div className={styles.container}>
      <div>
        <h2>M</h2>
      </div>
      <h3>Todo App</h3>
      <h3>{time}</h3>
    </div>
  );
};

export default Header;
