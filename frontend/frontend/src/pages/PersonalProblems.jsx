import { useState, useEffect } from "react";
import Nav from "../assets/components/nav";
import ProblemListHeader from "../assets/components/personalProblems/ProblemListHeader";
import ProblemList from "../assets/components/personalProblems/ProblemList";
import BeeImage from "../assets/components/personalProblems/BeeImage";
import { useAuth0 } from "@auth0/auth0-react";

const PersonalProblems = () => {
  const [subjects, setSubjects] = useState([]);
  const { user } = useAuth0();
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch(
          "https://unihack2024-13sm.onrender.com/get-user-tests?" +
            new URLSearchParams({ user: user.nickname })
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
      <div
        className="w-full max-w-3xl mx-auto px-6 md:px-0 text-center space-y-8"
        style={{ paddingTop: "5rem" }}
      >
        <ProblemListHeader />
        <ProblemList subjects={subjects} />
      </div>
      <BeeImage />
    </div>
  );
};

export default PersonalProblems;
