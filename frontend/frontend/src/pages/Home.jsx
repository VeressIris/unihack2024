import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../assets/components/nav";
import girl from "../assets/images/home-images/home-girl.svg";
import bee from "../assets/images/home-images/home-bee.png";
import Button from "../assets/components/btn";

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
          height: "92%",
        }}
      ></div>

      <div className="relative z-10">
        <Nav />
        <div className="flex md:flex-row-reverse md:mr-[5%] flex-col">
          <div className="girl-imagetop-20 -mt-5">
            <img src={girl} alt="Girl" className="h-[450px] w-auto" />
            <div className="absolute top-24 left-1/2 transform translate-x-custom -translate-y-10">
              <img src={bee} alt="Bee" className="h-[200px] w-auto" />
            </div>
          </div>

          <div className="flex flex-col mt-5 md:ml-0 md:mr-0 ml-[10%] mr-[10%]">
            <div className="main-text mt-12 md:text-4xl text-2xl font-bold text-white">
              <p>
                Să fii olimpic e ușor,
                <br />
                când știi unde să cauți ajutor!
              </p>
            </div>

            <div className="mt-8 md:text-base text-sm font-normal text-[#E8F2F4]">
              <p>
                OlympiAId este platforma care te ajută să-ți duci pregătirea la
                următorul nivel,
                <br />
                oferindu-ți subiecte de olimpiadă personalizate și adaptate
                nevoilor tale.
              </p>
            </div>

            <div className="mt-8 md:text-base text-sm font-normal text-[#E8F2F4]">
              <p>
                Acceptă provocarea, descoperă-ți limitele și{" "}
                <span className="font-semibold">depășește-le!</span>
              </p>
            </div>

            <div className="mt-[10%] ml-[42%]">
              <Button
                text="START PROBLEME"
                onClick={handleStartProblemeClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
