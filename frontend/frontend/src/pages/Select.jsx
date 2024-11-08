import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../assets/components/nav';
import bee from '../assets/images/select-images/laptop-bee/bee.png';
import beecy from '../assets/images/select-images/laptop-bee/bee-cy.png';
import beehcy from '../assets/images/select-images/laptop-bee/bee-hcy.png';
import wavebeh from '../assets/images/select-images/wave-select-2.svg';
import wavefro from '../assets/images/select-images/wave-select-1.svg';
import laptop from '../assets/images/select-images/laptop-bee/laptop.png';
import Button from '../assets/components/btn';
import Dropdown from '../assets/components/dropdown';

const domain_opt = ['Biologie', 'Istorie', 'Engleză'];
const class_opt = ['IX', 'X', 'XI', 'XII'];
const phase_opt = ['Locală', 'Județeană', 'Națională'];

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
        nextInterval = 3000;
      } else if (images[index] === beehcy && images[(index + 1) % images.length] === beecy) {
        nextInterval = 50;
      } else if (images[index] === beecy && images[(index + 1) % images.length] === bee) {
        nextInterval = 40;
      }

      clearInterval(interval);
      interval = setInterval(startTransition, nextInterval);
    };

    interval = setInterval(startTransition, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSelectDomain = (option) => setSelectedDomain(option);
  const handleSelectClass = (option) => setSelectedClass(option);
  const handleSelectPhase = (option) => setSelectedPhase(option);

  const allOptionsSelected = selectedDomain && selectedClass && selectedPhase;

  const handleStartProblemeClick = () => {
    if (allOptionsSelected) {
      navigate('/loading');
    } else {
      alert('Selectează toate datele problemelor, înainte de a continua!');
    }
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

      <div className="absolute bottom-10 left-10 z-20">
        <img src={currentBeeImage} alt="Bee" className="h-[200px] w-auto transition-opacity duration-1000" />
      </div>

      <div className="absolute -bottom-10 -left-10 z-30">
        <img src={laptop} alt="Laptop" className="h-[250px] w-auto" />
      </div>

      <div className="flex flex-col items-center mt-20 z-20">
        <h2 className="text-nsw text-2xl font-medium mb-0">Selectează datele problemelor tale</h2>
      </div>
      <div className="flex flex-row items-center space-x-4 mt-12">
        <Dropdown options={domain_opt} label="Selectează domeniul" onSelect={handleSelectDomain} />
        <Dropdown options={class_opt} label="Selectează clasa" onSelect={handleSelectClass} />
        <Dropdown options={phase_opt} label="Selectează etapa" onSelect={handleSelectPhase} />
      </div>

      <div className="mt-8 flex flex-row items-center">
        <Button text="START PROBLEME" onClick={handleStartProblemeClick} />
      </div>
    </div>
  );
};

export default Select;
