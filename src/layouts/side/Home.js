import Slider from "../../pages/home/Slider";
import Deal from "../../pages/home/Deal";
import React from "react";
import CategoryHome from "../../pages/home/CategoryHome";
import Lightnovel from "../../pages/home/Lightnovel";
import Request from "../../pages/home/Request";
import Items from "../../pages/home/Items";
import Distributor from "../../pages/home/Distributor";
import Region from "../../pages/home/Region";
import Mangak from "../../pages/home/Mangak";


function Home(props) {
  return (
    <div className="container">
      <Slider />
      <Deal />
      <CategoryHome/>
      <Lightnovel />
      <Mangak />
      <Request />
      <Items />
      <Distributor />
      <Region />
    </div>
  );
}

export default Home;
