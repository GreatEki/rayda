import React from "react";
import { Product } from "@/redux/types";
import { Button, Card } from "src/components";
import styles from "./FeaturedItem.module.css";

interface Props {
  products: Product[];
}

const FeaturedItem: React.FC<Props> = ({ products }) => {
  return (
    <div className={styles.featuredItems}>
      <div className={styles.caption}>
        <h3> Featured Items </h3>

        <Button>View Auction</Button>
      </div>

      <div className={styles.stockList}>
        {products &&
          products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default FeaturedItem;
