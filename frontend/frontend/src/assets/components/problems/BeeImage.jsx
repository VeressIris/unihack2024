import React from "react";
import beeImage from "/images/problems-images/problems-bee.svg";

const BeeImage = () => {
  return (
    <div className="fly-around-animation">
     <img src={beeImage} alt="Bee" className="w-full h-full" />
    </div>
  );
};

export default BeeImage;
