import Slider from "../../pages/home/Slider";
import Deal from "../../pages/home/Deal";
import React from "react";
import Literature from "../../pages/home/Literature";
import Lightnovel from "../../pages/home/Lightnovel";
import Request from "../../pages/home/Request";
import Items from "../../pages/home/Items";
import Distributor from "../../pages/home/Distributor";
import Region from "../../pages/home/Region";


function Home(props) {
  return (
    <div className="container">
      <Slider />
      <Deal />
      <Literature />
      <Lightnovel />
      <Request />
      <Items />
      <Distributor />
      <Region />
    </div>
  );
}

export default Home;
