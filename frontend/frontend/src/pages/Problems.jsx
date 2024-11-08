import React from 'react';
import Nav from '../assets/components/nav';
import Bee from '../assets/images/problems-images/problems-bee.png';

const Problems = () => {
  const subjects = [
    { title: "Biologie - Celula și funcțiile sale", description: "Descoperă structura celulară și principalele funcții ale acesteia." },
    { title: "Istorie - Revoluția industrială", description: "Analizăm impactul revoluției industriale asupra societății moderne." },
    { title: "Engleză - Shakespeare și literatura renascentistă", description: "Explorează operele lui Shakespeare și influența sa în literatura engleză." }
  ];

  return (
    <div className="select-page min-h-screen flex flex-col items-center bg-gradient-to-br from-[#3ba4cb] to-[#2c3eb4] relative">
      <Nav />
      <div className="flex flex-col items-center mt-5 mx-10 md:mx-20 text-center text-blbnsw space-y-4 px-6">
        <h2 className="text-nsw text-2xl font-medium mb-8">
          Lista de subiecte a abonațiilor noștri!
        </h2>

        <div className="grid gap-6 w-full max-w-5xl">
          {subjects.map((subject, index) => (
            <div key={index} className="bg-lbnsw shadow-lg rounded-lg p-6 text-left space-y-2 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-black">{subject.title}</h3>
              <p className="text-gray-700">{subject.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-24 -left-20 z-20 -mt-12 twitch-animation">
        <img src={Bee} alt="Bee" className="h-[370px] w-auto" /> {/* Changed bee to Bee */}
      </div>
    </div>
  );
};

export default Problems;
