import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClickedOutside from "./ClickedOutside";
import images from "../../images/images";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { useTransaction } from "../../context/TransactionContext";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { resetTransaction } = useTransaction();
  const [user, setUser] = useState({
    name: "",
    job: "",
    photoProfile: "",
  });

  useEffect(() => {
    const storedAuthData = JSON.parse(sessionStorage.getItem("authToken"));
    setUser({
      name: storedAuthData.user.name,
      job: storedAuthData.user.job,
      photoProfile: storedAuthData.user.photoProfile ? `http://localhost:8000/${storedAuthData.user.photoProfile}` : "",
    })
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    resetTransaction();
    navigate("/");
  };

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
              {user.name}
            </span>
            <span className="block text-xs">{user.job}</span>
          </span>

          <span className="h-12 w-12 rounded-full overflow-hidden drop-shadow-md">
            <img className="h-full w-full" src={user.photoProfile ? user.photoProfile : images.userPhotoProfile} alt="userProfile" />
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
            <button
              onClick={handleLogout}
              className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-orangePrimary lg:text-base"
            >
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
