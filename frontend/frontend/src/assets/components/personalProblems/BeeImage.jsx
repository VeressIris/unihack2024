import React from "react";
import beeImage from "/images/personal-problems-images/personal-problems-bee.png"; // Ensure this path is correct

const BeeImage = () => {
  return (
    <img
      src={beeImage}
      alt="Bee Head"
      className="fixed"
      style={{
        top: "50%",                  
        right: "-100px",                 
        width: "300px",                
        height: "390px",              
        transform: "translateY(-50%) rotate(-45deg)", 
        zIndex: 1000,                
      }}
    />
  );
};

export default BeeImage;
