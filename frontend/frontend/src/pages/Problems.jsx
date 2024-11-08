import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../assets/components/nav';
import Bee from '../assets/images/problems-images/problems-bee.png';
import FormattedText from '../assets/components/formattedText';

const Problems = () => {
  const navigate = useNavigate();

  const subjects = [
    {
      title: "Biologie - Celula și funcțiile sale",
      description:
        "Descoperă structura celulară și principalele funcții ale acesteia. Analizăm impactul revoluției industriale asupra societății moderne. Descoperă structura celulară și principalele funcții ale acesteia.Descoperă structura celulară și principalele funcții ale acesteia. Analizăm impactul revoluției industriale asupra societății moderne. Descoperă structura celulară și principalele funcții ale acesteia.",
    },
    { title: "Istorie - Revoluția industrială", description: "Analizăm impactul revoluției industriale asupra societății moderne." },
    { title: "Engleză - Shakespeare și literatura renascentistă", description: "Explorează operele lui Shakespeare și influența sa în literatura engleză." },
  ];

  const handleProblemClick = (subject) => {
    localStorage.setItem("selectedSubject", JSON.stringify(subject));
    navigate('/view');
  };

  return (
    <div className="problems-page min-h-screen flex flex-col items-center bg-gradient-to-br from-[#3ba4cb] to-[#2c3eb4] relative overflow-hidden">
      <Nav />
      <div className="flex flex-grow flex-col items-center justify-center w-full max-w-3xl mx-auto mt-10 px-6 md:px-0 text-center text-blbnsw space-y-8">
        <h2 className="text-nsw text-2xl font-medium -mt-2 mb-4">
          Lista de subiecte a utilizatorilor noștri!
        </h2>
        <div className="grid gap-6 w-full max-w-[85%] mx-auto mb-40">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-lbnsw shadow-lg rounded-lg p-5 text-left space-y-2 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleProblemClick(subject)}
            >
              <h3 className="text-xl font-semibold text-black mb-7">{subject.title}</h3>
              <FormattedText text={subject.description} className/>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-24 left-[2%] z-20 -mt-12 float-dramatically-animation">
        <img src={Bee} alt="Bee" className="h-[370px] w-auto" />
      </div>
      
      <div className="mt-10 mb-10"/>
    </div>
  );
};

export default Problems;
