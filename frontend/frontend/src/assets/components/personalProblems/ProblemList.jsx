import React from "react";
import ProblemPreview from "../../../assets/components/problemPreview";

const ProblemList = ({ subjects }) => {
  return (
    <div className="grid gap-6 w-full max-w-[85%] mx-auto mb-40">
      {subjects.map((subject, index) => (
        <ProblemPreview key={index} subject={subject} index={index} />
      ))}
    </div>
  );
};

export default ProblemList;
