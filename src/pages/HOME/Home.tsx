import AuctionCard from "./AuctionCard/AuctionCard";
import { Header } from "src/components";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />

      <AuctionCard />
    </div>
  );
};
export default Home;
