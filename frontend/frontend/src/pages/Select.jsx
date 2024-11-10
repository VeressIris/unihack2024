import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../assets/components/nav";
import bee from "/images/select-images/laptop-bee/bee.svg";
import beecy from "/images/select-images/laptop-bee/beecy.svg";
import beehcy from "/images/select-images/laptop-bee/beehcy.svg";
import Button from "../assets/components/btn";
import BackgroundWaves from "../assets/components/select/BackgroundWaves";
import BeeAnimation from "../assets/components/select/BeeAnimation";
import LaptopImage from "../assets/components/select/LaptopImage";
import SelectionHeader from "../assets/components/select/SelectionHeader";
import SelectionOptions from "../assets/components/select/SelectionOptions";

const domainOptions = ["Biologie", "Istorie", "Engleză","Informatică"];
const classOptions = ["IX", "X", "XI", "XII"];
const phaseOptions = ["Locală", "Județeană", "Națională"];

const Select = () => {
  const [currentBeeImage, setCurrentBeeImage] = useState(bee);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedPhase, setSelectedPhase] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const images = [bee, beehcy, beecy];
    let index = 0;
    let interval;

    const startTransition = () => {
      index = (index + 1) % images.length;
      setCurrentBeeImage(images[index]);

      let nextInterval;
      if (images[index] === bee && images[(index + 1) % images.length] === beehcy) {
        nextInterval = 2500;
      } else if (images[index] === beehcy && images[(index + 1) % images.length] === beecy) {
        nextInterval = 60;
      } else if (images[index] === beecy && images[(index + 1) % images.length] === bee) {
        nextInterval = 90;
      }

      clearInterval(interval);
      interval = setInterval(startTransition, nextInterval);
    };

    interval = setInterval(startTransition, 1500);

    return () => clearInterval(interval);
  }, []);

  const allOptionsSelected = selectedDomain && selectedClass && selectedPhase;

  const handleStartProblemeClick = () => {
    if (allOptionsSelected) {
      navigate("/loading");
    } else {
      alert("Selectează toate datele problemelor, înainte de a continua!");
    }
  };

  return (
    <div className="select-page min-h-screen flex flex-col items-center bg-gradient-to-br from-[#3ba4cb] to-[#2c3eb4] relative">
      <Nav />
      <BackgroundWaves />
      <BeeAnimation currentBeeImage={currentBeeImage} />
      <LaptopImage />
      <SelectionHeader />
      <SelectionOptions
        domainOptions={domainOptions}
        classOptions={classOptions}
        phaseOptions={phaseOptions}
        onSelectDomain={setSelectedDomain}
        onSelectClass={setSelectedClass}
        onSelectPhase={setSelectedPhase}
      />
      <div className="mt-8 flex flex-row items-center">
        <Button text="START PROBLEME" onClick={handleStartProblemeClick} />
      </div>
    </div>
  );
};

export default Select;
