import React from "react";

const UserProblems = ({ userProblems }) => {
  return (
    <div className="mt-4">
      {userProblems.length > 0 ? (
        <ul className="space-y-3">
          {userProblems.map((item, index) => (
            <li key={index} className="bg-white text-black p-4 rounded-md shadow-md">
              {item.problem}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">Nu ai generat nicio problemă momentan.</p>
      )}
    </div>
  );
};

export default UserProblems;
