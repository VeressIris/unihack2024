import React from 'react';

const FormattedText = ({ text = "", maxLength = 300, splitLength = 90 }) => {
  const formatText = (text) => {
    if (!text || typeof text !== "string") {
      return [""];
    }

    const truncatedText = text.slice(0, maxLength); // Truncate to maxLength
    const lines = truncatedText.split("\\n"); // Split by newlines
    
    return lines.map((line, index) => {
      // Further split lines to respect splitLength
      let words = line.split(" ");
      let currentLine = "";
      let formattedLines = [];

      for (let word of words) {
        if ((currentLine + word).length + 1 <= splitLength) {
          currentLine += (currentLine ? " " : "") + word;
        } else {
          formattedLines.push(currentLine);
          currentLine = word;
        }
      }
      if (currentLine) formattedLines.push(currentLine); // Add remaining text

      return formattedLines.join("\n");
    }).flat(); // Flatten the array to a single list of lines
  };

  const formattedLines = formatText(text);

  return (
    <>
      {formattedLines.map((line, index) => (
        <p key={index} style={{ whiteSpace: "pre-wrap" }} className="text-gray-700">
          {line}
        </p>
      ))}
    </>
  );
};

export default FormattedText;
