import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../assets/components/nav";
import BackgroundWaves from "../assets/components/loading/BackgroundWaves";
import LoadingText from "../assets/components/loading/LoadingText";
import BeeImage from "../assets/components/loading/BeeImage";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/subject");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="select-page min-h-screen flex flex-col items-center bg-gradient-to-br from-[#419BD0] to-[#4556C5] relative">
      <Nav />
      <BackgroundWaves />
      <LoadingText />
      <BeeImage />
    </div>
  );
};

export default Loading;
