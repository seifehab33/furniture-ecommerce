import BestSell from "./BestSell";
import BrowseRooms from "./BrowseRooms";
import Main from "./Main";
import SpecialOffers from "./SpecialOffers";
import TopSelling from "./TopSelling";

function Home() {
  return (
    <>
      <Main />
      <BestSell />
      <BrowseRooms />
      <TopSelling />
      <SpecialOffers />
    </>
  );
}

export default Home;
