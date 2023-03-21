import AuctionCard from "./AuctionCard/AuctionCard";
import FeaturedItem from "./FeaturedItems/FeaturedItem";
import { Header, Loader } from "src/components";
import styles from "./Home.module.css";

import { useGetProductsQuery } from "src/services/app";

const Home = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

  return (
    <div className={styles.home}>
      <Header />

      <AuctionCard />

      {isLoading ? <Loader /> : <FeaturedItem products={data?.data} />}
    </div>
  );
};
export default Home;
