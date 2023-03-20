import React from "react";
import { BiBell } from "react-icons/bi";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <h2> Welcome </h2>
        <p> Your current sales auction and activity </p>
      </div>

      <div className={styles.notification}>
        <BiBell size={40} />
        <span className={styles.alert}>2</span>
      </div>
    </nav>
  );
};

export default Header;
