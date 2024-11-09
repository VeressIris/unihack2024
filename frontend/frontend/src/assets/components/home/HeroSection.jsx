import React from "react";
import girl from "../../../assets/images/home-images/home-girl.svg";
import bee from "../../../assets/images/home-images/home-bee.png";

const HeroSection = () => {
  return (
    <div className="girl-imagetop-20 -mt-5">
      <img src={girl} alt="Girl" className="h-[450px] w-auto" />
      <div className="absolute top-24 left-1/2 transform translate-x-custom -translate-y-10">
        <img src={bee} alt="Bee" className="h-[200px] w-auto float-animation" />
      </div>
    </div>
  );
};

export default HeroSection;
