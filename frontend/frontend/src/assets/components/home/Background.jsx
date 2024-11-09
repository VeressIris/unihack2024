
import React from "react";

const Background = () => {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/home-wave.svg')`,
        }}
      ></div>

      <div
        className="absolute top-0 left-0 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/home-gradient.svg')`,
          height: "92%",
        }}
      ></div>
    </>
  );
};

export default Background;
