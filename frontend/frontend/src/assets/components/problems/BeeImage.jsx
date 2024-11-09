import React from "react";
import Bee from "/images/problems-images/problems-bee.svg";

const BeeImage = () => {
  return (
    <div className="absolute bottom-24 left-[2%] z-20 -mt-12 float-dramatically-animation">
      <img src={Bee} alt="Bee" className="h-[250px] w-auto" />
    </div>
  );
};

export default BeeImage;
