import React from "react";
// import { Logo, Banner } from "src/components";
import { Logo, BannerImg } from "src/assets";
import styles from "./AuctionCard.module.css";
import { AiOutlineLike } from "react-icons/ai";

const AuctionCard = () => {
  return (
    <div className={styles.auctionCard}>
      <img src={BannerImg} className={styles.banner}></img>

      <div className={styles.bannerInfo}>
        <div>
          <h2>Starts in: 3 days: 2 hours : 24 minutes </h2>
        </div>

        <i className={styles.acceptInvite}>
          <AiOutlineLike size={25} /> &nbsp;{" "}
          <span className={styles.acceptInviteText}> Accept Invite </span>
        </i>
      </div>

      <div className={styles.siteStatus}>
        <h5 className={styles.notLive}>&#x2022; &nbsp; Not Live </h5>
        <h5 className={styles.layers}> Layers Auction</h5>
      </div>

      <img src={Logo} alt="logo" className={styles.logo}></img>
    </div>
  );
};

export default AuctionCard;
