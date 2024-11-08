import React, { useState } from 'react';

const Dropdown = ({ options, label, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center items-center w-full rounded-md border border-dblbnsw shadow-sm px-4 py-2 bg-lbnsw text-sm font-medium text-gray-700 hover:bg-gray-50 text-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
        <span className="ml-2">&#x25bc;</span> {/* Down arrow */}
      </button>

      {isOpen && (
        <div 
          className="absolute z-10 mt-2 w-full rounded-md bg-lbnsw shadow-lg transition-transform duration-300 ease-out hover:scale-105" 
          // Added transition and hover scale effect to enlarge the dropdown on hover
        >
          <ul className="py-1">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
