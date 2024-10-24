import { useState } from "react";
import { Link } from "react-router-dom";
import ClickedOutside from "./ClickedOutside";
import images from "../../images/images";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <ClickedOutside onClick={() => setDropdownOpen(false)} className="relative">
      <li>
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2.5"
          to="#"
        >
          <span className="hidden text-right lg:block">
            <span className="block text-sm font-medium text-black">
              Thomas Anree
            </span>
            <span className="block text-xs">Pengusaha</span>
          </span>

          <span className="h-12 w-12 rounded-full">
            <img src={images.userPhotoProfile} alt="userProfile" />
          </span>

          <IoIosArrowDown className="w-4 h-4" />
        </button>

        {/* Start Dropdown */}
        {dropdownOpen && (
          <div
            className={`absolute right-0 mt-4 flex w-60 flex-col rounded-sm border border-gray-200 bg-white shadow-md`}
          >
            <ul className="flex flex-col gap-5 border-b px-6 py-7 z-30">
              <li>
                <Link
                  to="/profile"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-orangePrimary lg:text-base"
                >
                  <IoPersonOutline className="w-5 h-5" />
                  Profil Saya
                </Link>
              </li>
            </ul>
            <button className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-orangePrimary lg:text-base">
              <SlLogout className="w-5 h-5" />
              Keluar
            </button>
          </div>
        )}
        {/* End Dropdown */}
      </li>
    </ClickedOutside>
  );
};

export default DropdownUser;
