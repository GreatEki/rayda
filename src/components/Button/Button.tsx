import React, { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
}
const Button = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
