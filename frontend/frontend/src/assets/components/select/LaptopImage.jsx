
import React from "react";
import laptop from "/images/select-images/laptop-bee/laptop.png";

const LaptopImage = () => {
  return (
    <div className="absolute -bottom-16 -left-10 z-30">
      <img src={laptop} alt="Laptop" className="h-[250px] w-auto" />
    </div>
  );
};

export default LaptopImage;
