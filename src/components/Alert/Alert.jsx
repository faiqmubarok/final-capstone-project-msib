import PropTypes from "prop-types";
import { MdDone, MdOutlineErrorOutline } from "react-icons/md";
import { IoIosClose, IoIosInformationCircleOutline } from "react-icons/io";

const Alert = ({ type, children, onClose }) => {
  return (
    <div
      className={`flex items-center p-4 border-t-4 fixed top-0 right-1/2 translate-x-1/2 z-30 w-full lg:w-fit ${
        type === "success"
          ? "text-green-800 bg-green-50 border-green-300"
          : type === "error"
          ? "text-red-800 bg-red-50 border-red-300"
          : "text-blue-800 bg-blue-50 border-blue-300"
      }`}
    >
      {type === "success" && (
        <MdDone className="w-5 h-5 shrink-0 text-green-800" />
      )}
      {type === "error" && (
        <MdOutlineErrorOutline className="w-5 h-5 shrink-0 text-red-800" />
      )}
      {!type && (
        <IoIosInformationCircleOutline className="w-5 h-5 shrink-0 text-blue-800" />
      )}

      <div className="ms-3 text-sm flex items-center">
        <span className="font-medium">
          {type === "success" && "Berhasil"}
          {type === "error" && "Kesalahan"}
          {!type && "Info"}
        </span>
        <p>
          {": "}
          {children}
        </p>
      </div>

      {type === "error" && (
        <button
          type="button"
          onClick={onClose}
          className="ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 hover:bg-opacity-75 inline-flex items-center justify-center h-8 w-8 bg-red-50 text-red-500 focus:ring-red-400 hover:bg-red-200"
          aria-label="Close"
        >
          <IoIosClose className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alert;
