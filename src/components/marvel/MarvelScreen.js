import React from "react";
import HeroList from "../heroe/HeroList";


const MarvelScreen = ({ publisher }) => {


  return (
    <div>
      <h1>Marvel</h1>
      <hr />
      <HeroList publisher={"Marvel Comics"} />
    </div>
  );
};

export default MarvelScreen;
