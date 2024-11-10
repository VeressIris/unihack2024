import React from 'react';

const FormattedText = ({ text = "", maxLength = 300, splitLength = 90 }) => {
  const formatText = (text) => {
    if (!text || typeof text !== "string") {
      return [""]; // Returnează un array gol pentru a preveni erorile
    }

    if (text.length <= splitLength) {
      return [text];
    }

    const words = text.split(" ");
    let lines = [];
    let currentLine = "";

    for (let word of words) {
      if ((currentLine + word).length + 1 <= splitLength) {
        currentLine += (currentLine ? " " : "") + word;
      } else {
        if (currentLine.length < splitLength) {
          currentLine += " ".repeat(splitLength - currentLine.length);
        }
        lines.push(currentLine);
        currentLine = word;
      }
    }

    if (currentLine.length > 0) {
      if (currentLine.length < splitLength) {
        currentLine += " ".repeat(splitLength - currentLine.length);
      }
      lines.push(currentLine);
    }

    let truncatedLines = lines.join("\n").slice(0, maxLength);
    if (truncatedLines.length < lines.join("\n").length) {
      truncatedLines += "...";
    }

    return truncatedLines.split("\n");
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
