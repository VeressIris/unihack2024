import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../assets/components/nav";
import bee from "../assets/images/loading-images/loading-bee.png";
import wavefro from "../assets/images/loading-images/loading-wave-2.svg";
import wavebeh from "../assets/images/loading-images/loading-wave-1.svg";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/subject");
    }, 10000); 
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="select-page min-h-screen flex flex-col items-center bg-gradient-to-br from-[#419BD0] to-[#4556C5] relative">
      <Nav />
      <div className="fixed -bottom-5 left-0 w-full">
        <img src={wavebeh} alt="Wave Background" className="w-full h-auto" />
      </div>

      <div className="fixed -bottom-5 left-0 w-full">
        <img src={wavefro} alt="Wave-front Background" className="w-full h-auto" />
      </div>

      <div className="flex flex-col items-center mt-20 ml-20 mr-20 text-center text-blbnsw space-y-4 px-6">
        <h2 className="text-nsw text-2xl font-medium">
          Se pregătesc subiectele tale personalizate...
        </h2>
        <p className="text-left text-base">
          Analizăm informațiile și generăm cele mai relevante provocări pentru tine.
          <br /> Așteaptă puțin – merită!
        </p>
      </div>
      
      <div className="flex items-center justify-center -mt-12 rotate-animation">
        <img src={bee} alt="Bee" className="h-[350px] w-auto" />
      </div>
    </div>
  );
};

export default Loading;
