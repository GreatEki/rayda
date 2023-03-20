import React from "react";
import { ImageLaptop } from "src/assets";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <img src={ImageLaptop} alt="stock" className={styles.stock}></img>

      <div className={styles.cardBody}>
        <div>
          <span className={styles.avatar}>KO</span>
          <span className={styles.username}> Koray Okumus </span>
          <span className={styles.highestBidder}> (Highest Bidder)</span>
        </div>

        <article className={styles.productDesc}>
          Apple Macbook Air 13" M1 Chip 8GB 256GB 2020 Model - Rose Gold
        </article>

        <p className={styles.bid}>
          Current Bid:{" "}
          <span className={styles.bidAmount}>
            <del className={styles.del}>N</del>795, 000{" "}
          </span>
        </p>
      </div>

      <div className={styles.footer}>
        <button className={styles.wishList}>Add to wishlist</button>
      </div>
    </div>
  );
};

export default Card;
