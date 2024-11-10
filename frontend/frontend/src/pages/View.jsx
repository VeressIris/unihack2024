import React, { useEffect, useState } from "react";
import Nav from "../assets/components/nav";

const View = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [solution, setSolution] = useState("");
  const [userSolutions, setUserSolutions] = useState([]);

  useEffect(() => {
    const subjectData = localStorage.getItem("selectedSubject");
    if (subjectData) {
      setSelectedSubject(JSON.parse(subjectData));
    }

    const savedSolutions = localStorage.getItem("userSolutions");
    if (savedSolutions) {
      setUserSolutions(JSON.parse(savedSolutions));
    }
  }, []);

  const handleSolutionSubmit = (e) => {
    e.preventDefault();
    if (solution.trim()) {
      const newSolution = {
        text: solution,
        timestamp: new Date().toLocaleString(),
      };

      const updatedSolutions = [...userSolutions, newSolution];
      setUserSolutions(updatedSolutions);
      localStorage.setItem("userSolutions", JSON.stringify(updatedSolutions));
      setSolution("");
    } else {
      alert("Please enter a solution before submitting.");
    }
  };

  const renderWithNewLines = (text) => {
    return text.split("\\n").map((line, index) => (
      <p key={index} style={{ whiteSpace: "pre-wrap" }} className="text-gray-700 mb-2">
        {line}
      </p>
    ));
  };

  if (!selectedSubject) {
    return <div>Loading...</div>;
  }

  return (
    <div className="view-page min-h-screen bg-gradient-to-br from-[#3ba4cb] to-[#2c3eb4] flex flex-col items-center text-white">
      <Nav />
      <div className="w-full max-w-3xl p-8 bg-white text-black rounded-lg shadow-lg mt-10">
        <h2 className="text-2xl font-bold mb-4">{selectedSubject.subject}</h2>

        <div className="mb-6">
          {renderWithNewLines(selectedSubject.content)}
        </div>

        <p className="text-lg mb-4 font-semibold text-blue-800">Detalii despre subiect:</p>
        <p className="mb-4">Vor veni cat de curând.</p>

        <p className="text-lg mb-4 font-semibold text-blue-800">Rezolvare:</p>
        <p className="text-gray-700 mb-6">Va veni cat de curând.</p>

        <p className="text-lg font-semibold text-blue-800">Sfaturi și resurse suplimentare:</p>
        <p className="text-gray-700 mb-6">Vor veni cât de curând.</p>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Trimite propria rezolvare:</h3>
          <form onSubmit={handleSolutionSubmit} className="flex flex-col space-y-4">
            <textarea
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows="4"
              placeholder="Scrieți rezolvarea aici..."
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Trimite Rezolvarea
            </button>
          </form>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Rezolvări trimise de utilizatori:</h3>
          {userSolutions.length > 0 ? (
            <ul className="space-y-4">
              {userSolutions.map((sol, index) => (
                <li key={index} className="p-4 border border-gray-300 rounded-lg bg-gray-100">
                  <p className="text-gray-800">{sol.text}</p>
                  <p className="text-gray-500 text-sm mt-2">Trimis la: {sol.timestamp}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Nu există rezolvări trimise încă.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default View;
