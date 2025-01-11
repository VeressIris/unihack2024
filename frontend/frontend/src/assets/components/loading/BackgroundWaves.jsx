
import wavefro from "/images/loading-images/loading-wave-2.svg";
import wavebeh from "/images/loading-images/loading-wave-1.svg";

const BackgroundWaves = () => {
  return (
    <>
      <div className="fixed -bottom-5 left-0 w-full">
        <img src={wavebeh} alt="Wave Background" className="w-full h-auto" />
      </div>
      <div className="fixed -bottom-5 left-0 w-full">
        <img src={wavefro} alt="Wave-front Background" className="w-full h-auto" />
      </div>
    </>
  );
};

export default BackgroundWaves;
