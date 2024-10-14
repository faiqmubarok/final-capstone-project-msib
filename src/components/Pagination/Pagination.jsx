import propTypes from "prop-types";
import { MdNavigateNext } from "react-icons/md";

const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <div className="p-2 flex items-center space-x-2 sm:rounded-lg w-full justify-center md:justify-start">
      <button
        className="p-2 rounded-lg text-gray-500 hover:bg-gray-50 disabled:text-gray-300 disabled:hover:bg-transparent transition"
        disabled={page === 1}
        onClick={() => setPage((prevPage) => prevPage - 1)}
      >
        <MdNavigateNext className="w-5 h-5 rotate-180" />
      </button>
      <span className="text-sm text-gray-600">
        Halaman <span className="font-semibold">{page}</span> dari{" "}
        <span className="font-semibold">{totalPages}</span>
      </span>
      <button
        className="p-2 rounded-lg text-gray-500 hover:bg-gray-50 disabled:text-gray-300 disabled:hover:bg-transparent transition"
        disabled={page === totalPages}
        onClick={() => setPage((prevPage) => prevPage + 1)}
      >
        <MdNavigateNext className="w-5 h-5" />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  page: propTypes.number.isRequired,
  totalPages: propTypes.number.isRequired,
  setPage: propTypes.func.isRequired,
};

export default Pagination;
