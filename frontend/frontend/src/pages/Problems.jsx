import Bee from "../assets/images/problems-images/problems-bee.png";
import ProblemPreview from "../assets/components/problemPreview";
import Nav from "../assets/components/nav";
import { useState, useEffect } from "react";

const Problems = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch(
          "https://unihack2024-13sm.onrender.com/get-tests"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSubjects(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    fetchSubjects();
  }, []);

  return (
    <div className="problems-page min-h-screen flex flex-col items-center bg-gradient-to-br from-[#3ba4cb] to-[#2c3eb4] relative overflow-hidden">
      <Nav />
      <div className="flex flex-grow flex-col items-center justify-center w-full max-w-3xl mx-auto mt-10 px-6 md:px-0 text-center text-blbnsw space-y-8">
        <h2 className="text-nsw text-2xl font-medium -mt-2 mb-4">
          Lista de subiecte a utilizatorilor noștri!
        </h2>
        <div className="grid gap-6 w-full max-w-[85%] mx-auto mb-40">
          {subjects.map((subject, index) => (
            <ProblemPreview key={index} subject={subject} index={index} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-24 left-[2%] z-20 -mt-12 float-dramatically-animation">
        <img src={Bee} alt="Bee" className="h-[370px] w-auto" />
      </div>

      <div className="mt-10 mb-10" />
    </div>
  );
};

export default Problems;
