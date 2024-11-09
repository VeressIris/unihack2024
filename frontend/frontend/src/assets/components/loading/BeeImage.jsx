import React from "react";
import bee from "/images/loading-images/loading-bee.png";

const BeeImage = () => {
  return (
    <div className="flex items-center justify-center -mt-12 rotate-animation">
      <img src={bee} alt="Bee" className="h-[350px] w-auto" />
    </div>
  );
};

export default BeeImage;
