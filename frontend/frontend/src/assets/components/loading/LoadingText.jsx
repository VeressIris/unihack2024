import React from "react";

const LoadingText = () => {
  return (
    <div className="flex flex-col items-center mt-20 ml-20 mr-20 text-center text-blbnsw space-y-4 px-6">
      <h2 className="text-nsw text-2xl font-medium">
        Se pregătesc subiectele tale personalizate...
      </h2>
      <p className="text-left text-base">
        Analizăm informațiile și generăm cele mai relevante provocări pentru tine.
        <br /> Așteaptă puțin – merită!
      </p>
    </div>
  );
};

export default LoadingText;
