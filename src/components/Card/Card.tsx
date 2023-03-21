import React from "react";
import { ImageLaptop } from "src/assets";
import styles from "./Card.module.css";
import { Product } from "src/redux/types";

interface Props {
  product: Product;
}

const Card = (props: Props) => {
  const { product } = props;
  return (
    <div className={styles.card}>
      <img src={product.image} alt="stock" className={styles.stock}></img>

      <div className={styles.cardBody}>
        <div>
          <span className={styles.avatar}>KO</span>
          <span className={styles.username}> {product.name} </span>
          <span className={styles.highestBidder}> (Highest Bidder)</span>
        </div>

        <article className={styles.productDesc}>{product.title}</article>

        <p className={styles.bid}>
          Current Bid: <span className={styles.bidAmount}>{product.bid}</span>
        </p>
      </div>

      <div className={styles.footer}>
        <button className={styles.wishList}>Add to wishlist</button>
      </div>
    </div>
  );
};

export default Card;
