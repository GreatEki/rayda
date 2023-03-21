import React from "react";
import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <ClipLoader color="#B74BFF" />
    </div>
  );
};

export default Loader;
