
import { useNavigate } from "react-router-dom";
import FormattedText from "./formattedText";

function ProblemPreview({ subject, index }) {
  const navigate = useNavigate();

  const handleProblemClick = (subject) => {
    localStorage.setItem("selectedSubject", JSON.stringify(subject));
    navigate("/view");
  };

  return (
    <div
      key={index}
      className="bg-lbnsw shadow-lg rounded-lg p-5 text-left space-y-2 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={() => handleProblemClick(subject)}
    >
      <h3 className="text-xl font-semibold text-black mb-4">
        {subject.creator} a generat o problemă de {subject.subject}, clasa a{" "}
        {subject.grade}-a, faza {subject.stage}
      </h3>
      <FormattedText text={subject.content} />
    </div>
  );
}

export default ProblemPreview;
