import React from "react";
import Bee from "../../../assets/images/problems-images/problems-bee.png";

const BeeImage = () => {
  return (
    <div className="absolute bottom-24 left-[2%] z-20 -mt-12 float-dramatically-animation">
      <img src={Bee} alt="Bee" className="h-[370px] w-auto" />
    </div>
  );
};

export default BeeImage;
