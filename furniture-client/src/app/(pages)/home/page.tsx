import BestSell from "./BestSell";
import BrandHome from "./BrandHome";
import BrowseRooms from "./BrowseRooms";
import LuxuriosFurn from "./LuxuriosFurn";
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
      <LuxuriosFurn />
      <BrandHome />
    </>
  );
}

export default Home;
