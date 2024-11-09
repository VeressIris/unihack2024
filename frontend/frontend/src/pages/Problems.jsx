import React, { useState, useEffect } from "react";
import Nav from "../assets/components/nav";
import ProblemListHeader from "../assets/components/problems/ProblemListHeader";
import ProblemList from "../assets/components/problems/ProblemList";
import BeeImage from "../assets/components/problems/BeeImage";

const Problems = () => {
  const [subjects, setSubjects] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <BeeImage scrollY={scrollY} />
      <div className="flex flex-grow flex-col items-center justify-center w-full max-w-3xl mx-auto mt-10 px-6 md:px-0 text-center text-blbnsw space-y-8">
        <ProblemListHeader />
        <ProblemList subjects={subjects} />
      </div>
      <div className="mt-10 mb-10" />
    </div>
  );
};

export default Problems;
