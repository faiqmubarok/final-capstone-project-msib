import { useState } from "react";
import ClickedOutside from "../Header/ClickedOutside";
import { IoIosArrowDown } from "react-icons/io";
import propTypes from "prop-types";

const FilterProjects = ({ selectedFilter, setSelectedFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedFilter(option);
    setIsOpen(false);
  };

  const options = ["Semua", "Pertanian", "Peternakan", "Perikanan"];

  return (
    <ClickedOutside
      onClick={() => setIsOpen(false)}
      className={"w-1/2 md:w-fit"}
    >
      <div className="relative text-left w-full">
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-between w-full items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 gap-2"
        >
          {selectedFilter}
          <IoIosArrowDown className="w-4 h-4" />
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-2 w-full md:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 right-0">
            <div className="py-1" role="none">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-medium ${
                    option === selectedFilter ? "text-orangePrimary" : ""
                  } `}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </ClickedOutside>
  );
};

FilterProjects.propTypes = {
  selectedFilter: propTypes.string,
  setSelectedFilter: propTypes.func,
};

export default FilterProjects;
