import React, { useEffect, useState } from "react";
import Nav from "../assets/components/nav";

const Subject = () => {
  const [test, setTest] = useState(null);

  useEffect(() => {
    const savedTest = localStorage.getItem("selectedTest");
    if (savedTest) {
      setTest(JSON.parse(savedTest));
    }
  }, []);

  if (!test) {
    return <div>Loading...</div>;
  }

  

  const formatContent= (text) => {
    
  return text.split("\\n").map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < text.split("\\n").length - 1 && <br />}
    </React.Fragment>
  ));
};

  return (
    <div className="subject-page min-h-screen bg-gradient-to-br from-[#3ba4cb] to-[#2c3eb4] flex flex-col items-center text-white">
      <Nav />
      <div className="w-full max-w-3xl p-8 bg-lbnsw text-black rounded-lg shadow-lg mt-10">
        <h2 className="text-2xl font-bold mb-4">{test.subject}</h2>
        <div className="mb-4">{formatContent(test.content)}</div>
        <p className="text-lg text-blue-800 font-semibold mb-2">
          Clasa: {test.grade}
        </p>
        <p className="text-lg text-blue-800 font-semibold mb-2">
          Fază: {test.stage}
        </p>
        <p className="text-sm text-gray-600">
          Creat de: {test.creator} la {new Date(test.dateCreated).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Subject;
