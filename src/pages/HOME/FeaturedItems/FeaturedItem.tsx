import React from "react";
import { Button, Card } from "src/components";
import styles from "./FeaturedItem.module.css";

const FeaturedItem = () => {
  return (
    <div className={styles.featuredItems}>
      <div className={styles.caption}>
        <h3> Featured Items </h3>

        <Button>View Auction</Button>
      </div>

      <div className={styles.stockList}>
        <Card />
      </div>
    </div>
  );
};

export default FeaturedItem;
