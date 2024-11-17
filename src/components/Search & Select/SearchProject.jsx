import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
// import data from "../../data/dummy-projects.json";
import { Link } from "react-router-dom";
import ClickedOutside from "../Header/ClickedOutside";
import propTypes from "prop-types";

const SearchProject = ({ onSearch, allProjects }) => {
  const [search, setSearch] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  // Effect for searching projects
  useEffect(() => {
    if (debouncedInput.trim() === "") {
      setSearchResult([]);
      return;
    }

    // Filter the data based on the search input
    const filteredResults = allProjects.filter((project) =>
      project.name.toLowerCase().includes(debouncedInput.toLowerCase())
    );

    setSearchResult(filteredResults);
  }, [debouncedInput, allProjects]);

  // Saat form dikirim, kirim hasil pencarian ke komponen induk
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchResult, debouncedInput); // Kirim searchResult dan searchKey ke induk
    setSearch(""); // Reset input
    setDebouncedInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 flex-col md:flex-row w-full"
    >
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <CiSearch className="w-5 h-5 text-gray-500 " />
        </div>
        <input
          type="text"
          id="search-project"
          className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Cari proyek"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {debouncedInput === "" ? null : (
          <ClickedOutside onClick={() => setSearch("")}>
            <div className="absolute top-11 z-10 max-h-40 overflow-y-auto w-full p-2 bg-white shadow-md rounded-lg text-sm space-y-1 border no-scrollbar">
              {searchResult.length > 0 ? (
                searchResult.map((project, index) => (
                  <Link
                    to={`/project/${project.id}`}
                    key={index}
                    className="w-full flex justify-between items-center p-2 border-b last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h4 className="font-medium text-gray-800">
                      {project.name}
                    </h4>
                    <p className="text-sm text-gray-500">{project.type}</p>
                  </Link>
                ))
              ) : (
                <p className="text-center text-gray-500 p-4">
                  Data tidak ditemukan.
                </p>
              )}
            </div>
          </ClickedOutside>
        )}
      </div>
      <button className="w-full md:w-fit px-4 py-2 bg-greenPrimary hover:bg-greenSecondary text-white rounded-lg text-sm font-medium">
        Cari
      </button>
    </form>
  );
};

SearchProject.propTypes = {
  onSearch: propTypes.func,
  allProjects: propTypes.array,
};

export default SearchProject;
