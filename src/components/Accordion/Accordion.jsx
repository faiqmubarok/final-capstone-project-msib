import { useState } from "react";
import propTypes from "prop-types";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={toggleAccordion}
        className="w-full text-left py-4 focus:outline-none flex justify-between items-center"
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="py-2 text-gray-700 text-sm">
          {content}
        </div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  title: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
};

export default Accordion;
