import AuctionCard from "./AuctionCard/AuctionCard";
import FeaturedItem from "./FeaturedItems/FeaturedItem";
import { Header } from "src/components";
import styles from "./Home.module.css";

// import { useAppSelector } from "src/redux/reduxHooks";

import { useGetProductsQuery } from "src/services/app";

const Home = () => {
  // const { products } = useAppSelector((state) => state.app);

  const { data } = useGetProductsQuery(undefined);

  console.log(data);
  return (
    <div className={styles.home}>
      <Header />

      <AuctionCard />

      <FeaturedItem />
    </div>
  );
};
export default Home;
