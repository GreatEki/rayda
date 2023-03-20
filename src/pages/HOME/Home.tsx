import AuctionCard from "./AuctionCard/AuctionCard";
import FeaturedItem from "./FeaturedItems/FeaturedItem";
import { Header } from "src/components";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />

      <AuctionCard />

      <FeaturedItem />
    </div>
  );
};
export default Home;
