import ClickedOutside from "../Header/ClickedOutside";
import { useRef } from "react";
import PropTypes from "prop-types";
import { IoIosClose } from "react-icons/io";

const Modal = ({ children, onClose }) => {
  const modalRef = useRef(null);

  return (
    <div className="fixed inset-0 bg-[#000]/50 z-30 flex items-center justify-center lg:pl-72">
      <ClickedOutside exceptionRef={modalRef} onClick={onClose}>
        <div
          ref={modalRef}
          className="rounded-sm border border-gray-100 bg-white shadow-md min-w-[300px] md:min-w-[400px] lg:min-w-[500px]"
        >
          {children}
        </div>
      </ClickedOutside>
    </div>
  );
};

const Header = ({ title, onClose }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-4 px-6 gap-4">
      <h1 className="text-xl font-semibold text-black">{title}</h1>
      <button
        className="p-2 bg-gray-100 hover:text-orangePrimary rounded-lg transition-colors duration-150"
        onClick={onClose}
      >
        <IoIosClose size={24} />
      </button>
    </div>
  );
};

Modal.Header = Header;

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

Header.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;
