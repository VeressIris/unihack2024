
import wavefro from "/images/select-images/wave-select-1.svg";
import wavebeh from "/images/select-images/wave-select-2.svg";

const BackgroundWaves = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-full z-0">
        <img src={wavebeh} alt="Wave Background" className="w-full h-auto" />
      </div>
      <div className="fixed bottom-0 left-0 w-full z-10">
        <img src={wavefro} alt="Wave-front Background" className="w-full h-auto" />
      </div>
    </>
  );
};

export default BackgroundWaves;
