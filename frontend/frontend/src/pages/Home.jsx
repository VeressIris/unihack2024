import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../assets/components/nav';
import girl from '../assets/images/home-images/home-girl.svg';
import bee from '../assets/images/home-images/home-bee.png';
import Button from '../assets/components/btn';

const Home = () => {
  const navigate = useNavigate();

  const handleStartProblemeClick = () => {
    navigate("/select"); 
  };

  return (
    <div className="relative min-h-screen bg-[#B5D4F4]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/images/home-images/home-wave.svg')`,
        }}
      ></div>
      <div
        className="absolute top-0 left-0 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/images/home-images/home-gradient.svg')`,
          height: '80vh',
        }}
      ></div>

      <div className="relative z-10">
        <Nav />
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:px-[10%] lg:py-[5%]">
          <div className="relative lg:w-1/2 lg:mt-0 mt-5">
            <img src={girl} alt="Girl" className="w-[60%] mx-auto lg:w-[80%]" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:-translate-y-3/4">
              <img src={bee} alt="Bee" className="h-[15vw] w-auto float-animation" />
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start lg:w-1/2 lg:ml-0 px-[5%] lg:px-0">
            <div className="main-text mt-5 text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              <p>
                Să fii olimpic e ușor,<br />când știi unde să cauți ajutor!
              </p>
            </div>

            <div className="mt-8 text-center lg:text-left text-lg md:text-xl lg:text-2xl font-normal text-[#E8F2F4]">
              <p>
                OlympiAId este platforma care te ajută să-ți duci pregătirea la următorul nivel,<br />
                oferindu-ți subiecte de olimpiadă personalizate și adaptate nevoilor tale.
              </p>
            </div>

            <div className="mt-8 text-center lg:text-left text-lg md:text-xl lg:text-2xl font-normal text-[#E8F2F4]">
              <p>
                Acceptă provocarea, descoperă-ți limitele și <span className="font-semibold">depășește-le!</span>
              </p>
            </div>

            <div className="mt-10 lg:mt-[5%]">
              <Button text="START PROBLEME" onClick={handleStartProblemeClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
