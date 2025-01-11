
const FormattedText = ({ text = "", maxLength = 300, splitLength = 90 }) => {
  const formatText = (text) => {
    if (!text || typeof text !== "string") {
      return [""];
    }

    const truncatedText = text.slice(0, maxLength); 
    const lines = truncatedText.split("\\n"); 
    
    return lines.map((line) => {

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
      if (currentLine) formattedLines.push(currentLine); 

      return formattedLines.join("\n");
    }).flat();
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
