import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../assets/components/nav";
import bee from "/images/select-images/laptop-bee/bee.svg";
import beecy from "/images/select-images/laptop-bee/beecy.svg";
import beehcy from "/images/select-images/laptop-bee/beehcy.svg";
import Button from "../assets/components/btn";
import BackgroundWaves from "../assets/components/select/BackgroundWaves";
import BeeAnimation from "../assets/components/select/BeeAnimation";
import LaptopImage from "../assets/components/select/LaptopImage";
import SelectionHeader from "../assets/components/select/SelectionHeader";
import SelectionOptions from "../assets/components/select/SelectionOptions";
import { useAuth0 } from "@auth0/auth0-react";
import { romanToInt, toMongoDbReadable } from "../utils";

const domainOptions = ["Biologie", "Istorie", "Engleză"];
const classOptions = ["IX", "X", "XI", "XII"];
const phaseOptions = ["Locală", "Județeană", "Națională"];

const Select = () => {
  const [currentBeeImage, setCurrentBeeImage] = useState(bee);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedPhase, setSelectedPhase] = useState(null);
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const images = [bee, beehcy, beecy];
    let index = 0;
    let interval;

    const startTransition = () => {
      index = (index + 1) % images.length;
      setCurrentBeeImage(images[index]);

      let nextInterval;
      if (
        images[index] === bee &&
        images[(index + 1) % images.length] === beehcy
      ) {
        nextInterval = 2500;
      } else if (
        images[index] === beehcy &&
        images[(index + 1) % images.length] === beecy
      ) {
        nextInterval = 60;
      } else if (
        images[index] === beecy &&
        images[(index + 1) % images.length] === bee
      ) {
        nextInterval = 90;
      }

      clearInterval(interval);
      interval = setInterval(startTransition, nextInterval);
    };

    interval = setInterval(startTransition, 1500);

    return () => clearInterval(interval);
  }, []);

  const allOptionsSelected = selectedDomain && selectedClass && selectedPhase;

  const handleStartProblemeClick = async () => {
    if (!isAuthenticated) {
      alert("Trebuie să fii logat pentru a accesa această funcționalitate.");
      return;
    }

    if (allOptionsSelected) {
      let content = "";
      try {
        const response = await fetch(
          `https://unihack2024-13sm.onrender.com/get-hardcoded-test?${new URLSearchParams(
            {
              subject: toMongoDbReadable(selectedDomain),
              grade: romanToInt(selectedClass),
              stage: toMongoDbReadable(selectedPhase),
            }
          )}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
        content = data[Math.floor(Math.random() * data.length)].content;
      } catch (error) {
        console.error("Fetch error: ", error);
      }

      const data = {
        creator: user.nickname,
        subject: selectedDomain,
        grade: selectedClass,
        stage: selectedPhase,
        content: content,
        solutions: [],
        dateCreated: new Date(),
      };

      localStorage.setItem("selectedTest", JSON.stringify(data));

      try {
        const response = await fetch(
          "https://unihack2024-13sm.onrender.com/add-test",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        navigate("/loading");
        return result;
      } catch (error) {
        console.error("Error occurred during fetch:", error);
      }
    } else {
      alert("Selectează toate datele problemelor, înainte de a continua!");
    }
  };

  return (
    <div className="select-page min-h-screen flex flex-col items-center bg-gradient-to-br from-[#3ba4cb] to-[#2c3eb4] relative">
      <Nav />
      <BackgroundWaves />
      <BeeAnimation currentBeeImage={currentBeeImage} />
      <LaptopImage />
      <SelectionHeader />
      <SelectionOptions
        domainOptions={domainOptions}
        classOptions={classOptions}
        phaseOptions={phaseOptions}
        onSelectDomain={setSelectedDomain}
        onSelectClass={setSelectedClass}
        onSelectPhase={setSelectedPhase}
      />
      <div className="mt-8 flex flex-row items-center -mt-2">
        <Button text="START PROBLEME" onClick={handleStartProblemeClick} />
      </div>
    </div>
  );
};

export default Select;
