import React from "react";
import styles from "./Navbar.module.css";
const Navbar = ({ active, stateHandler }) => {
  return (
    <div className={styles.nav}>
      <div
        className={!active ? styles.active : undefined}
        onClick={() => stateHandler(true)}
      >
        <img
          width="14px"
          src="https://cdn-icons.flaticon.com/png/128/3423/3423514.png"
          alt=""
        />
        <span>TIMER</span>
      </div>
      <div
        className={active ? styles.active : undefined}
        onClick={() => stateHandler(false)}
      >
        <img
          width="14px"
          src="https://cdn-icons-png.flaticon.com/128/3602/3602435.png"
          alt=""
        />
        <span>STOPWATCH</span>
      </div>
    </div>
  );
};

export default Navbar;
