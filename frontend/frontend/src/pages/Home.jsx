

import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"; 
import Nav from "../assets/components/nav";
import Button from "../assets/components/btn";
import Background from "../assets/components/home/Background";
import MainText from "../assets/components/home/MainText";
import Description from "../assets/components/home/Description";
import ChallengeText from "../assets/components/home/ChallengeText";
import HeroSection from "../assets/components/home/HeroSection";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const handleStartProblemeClick = () => {
    if (isAuthenticated) {
      navigate("/select");
    } else {
      alert("Please log in to access this page.");
      loginWithRedirect();
    }
  };

  return (
    <div className="relative min-h-screen bg-[#B5D4F4]">
      <Background />
      <div className="relative z-10">
        <Nav />
        <div className="flex md:flex-row-reverse md:mr-[5%] flex-col">
          <HeroSection />
          <div className="flex flex-col mt-5 md:ml-0 md:mr-0 ml-[10%] mr-[10%]">
            <MainText />
            <Description />
            <ChallengeText />
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
