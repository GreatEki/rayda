import React from "react";
import { Button } from "src/components";
import { Logo, BannerImg } from "src/assets";
import styles from "./AuctionCard.module.css";
import { AiOutlineLike } from "react-icons/ai";

const AuctionCard = () => {
  return (
    <div className={styles.auctionCard}>
      <img src={BannerImg} className={styles.banner}></img>

      <section className={styles.bannerInfo}>
        <div className={styles.logoBox}>
          <img src={Logo} alt="logo" className={styles.logo}></img>
        </div>

        <div className={styles.details}>
          <div>
            <h2>Starts in: 3 days: 2 hours : 24 minutes </h2>
            <div className={styles.siteStatus}>
              <h5 className={styles.notLive}>&#x2022; &nbsp; Not Live </h5>
              <h5 className={styles.layers}> Layers Auction</h5>
            </div>
          </div>

          <div>
            <Button>
              <AiOutlineLike size={25} /> &nbsp; <span> Accept Invite </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuctionCard;
