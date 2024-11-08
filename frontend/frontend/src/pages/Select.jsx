import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../assets/components/nav';
import bee from '../assets/images/select-images/laptop-bee/bee.png';
import beecy from '../assets/images/select-images/laptop-bee/bee-cy.png';
import beehcy from '../assets/images/select-images/laptop-bee/bee-hcy.png';
import wavebeh from '../assets/images/select-images/wave-select-2.svg';
import wavefro from '../assets/images/select-images/wave-select-1.svg';
import laptop from '../assets/images/select-images/laptop-bee/laptop.png';
import Button from '../assets/components/btn';

const Select = () => {
  const [currentBeeImage, setCurrentBeeImage] = useState(bee);

  useEffect(() => {
    const images = [bee, beehcy, beecy];
    let index = 0;
    let interval;

    const startTransition = () => {
      index = (index + 1) % images.length;
      setCurrentBeeImage(images[index]);

      let nextInterval;

      if (images[index] === bee && images[(index + 1) % images.length] === beehcy) {
        nextInterval = 4000; // 20 seconds between bee and beehcy
      } else if (images[index] === beehcy && images[(index + 1) % images.length] === beecy) {
        nextInterval = 50; // 0.5 seconds between beehcy and beecy
      } else if (images[index] === beecy && images[(index + 1) % images.length] === bee) {
        nextInterval = 50; // 0.5 seconds between beecy and bee
      }

      clearInterval(interval); // Clear the previous interval
      interval = setInterval(startTransition, nextInterval); // Set a new interval with the updated duration
    };

    interval = setInterval(startTransition,10); // Start with 20s interval for the first transition

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleSelect = (option) => {
    console.log('Selected:', option);
  };

  const onStartProblemeClick = () => {
    console.log("Starting problems...");
  };

  return (
    <div className="select-page min-h-screen flex flex-col items-center bg-gradient-to-br from-[#3ba4cb] to-[#2c3eb4] relative">
      <Nav />

      <div className="fixed bottom-0 left-0 w-full z-0">
        <img src={wavebeh} alt="Wave Background" className="w-full h-auto" />
      </div>

      <div className="fixed bottom-0 left-0 w-full z-10">
        <img src={wavefro} alt="Wave-front Background" className="w-full h-auto" />
      </div>

      {/* Bee Image */}
      <div className="absolute bottom-10 left-10 z-20">
        <img
          src={currentBeeImage}
          alt="Bee"
          className="h-[200px] w-auto transition-opacity duration-1000"
        />
      </div>

      {/* Laptop Image Positioned in Front of the Bee */}
      <div className="absolute -bottom-10 -left-10 z-30">
        <img
          src={laptop}
          alt="Laptop"
          className="h-[250px] w-auto"
        />
      </div>

      <div className="flex flex-col items-center mt-20 z-20">
        <h2 className="text-white text-2xl font-medium mb-8">Selectează datele problemelor tale</h2>
      </div>

      <div className="mt-8 flex items-center z-20">
        <Link to="/loading">
          <Button text="START PROBLEME" onClick={onStartProblemeClick} />
        </Link>
      </div>
    </div>
  );
};

export default Select;
