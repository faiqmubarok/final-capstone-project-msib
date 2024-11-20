import ClickedOutside from "./ClickedOutside";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  return (
    <ClickedOutside onClick={() => setDropdownOpen(false)} className="relative">
      <li>
        <Link
        to={"#"}
          onClick={() => {
            setNotifying(false);
            setDropdownOpen(!dropdownOpen);
          }}
          className="relative flex h-10 w-10 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray-50 hover:text-orangePrimary"
        >
          <span
            className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-red-500 ${
              notifying === false ? "hidden" : "inline"
            }`}
          >
            <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
          </span>

          <IoIosNotificationsOutline className="w-6 h-6 duration-300 ease-in-out" />
        </Link>

        {dropdownOpen && (
          <div
            className={`absolute -right-20 mt-5 flex h-80 w-72 flex-col rounded-sm border border-gray-200 bg-white shadow-md sm:right-0 sm:w-80 z-30`}
          >
            {/* Header Title */}
            <div className="px-4 py-3">
              <h5 className="text-sm font-medium text-gray-800">
                Notification
              </h5>
            </div>
            {/* Header Title */}

            {/* List Notification */}
            <ul className="flex h-auto flex-col overflow-y-auto text-gray-500 no-scrollbar">
              <li>
                <Link
                  className="flex flex-col gap-2.5 border-t border-gray-200 px-4 py-3 hover:bg-gray-50"
                  to="#"
                >
                  <p className="text-xs">
                    <span className="text-black">
                      Edit your information in a swipe
                    </span>{" "}
                    Sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim.
                  </p>
                  <p className="text-xs">12 May, 2025</p>
                </Link>
              </li>

              <li>
                <Link
                  className="flex flex-col gap-2.5 border-t border-gray-200 px-4 py-3 hover:bg-gray-50"
                  to="#"
                >
                  <p className="text-xs">
                    <span className="text-black">New updates available</span>{" "}
                    Update your system to enjoy the latest features and
                    improvements.
                  </p>
                  <p className="text-xs">10 May, 2025</p>
                </Link>
              </li>

              <li>
                <Link
                  className="flex flex-col gap-2.5 border-t border-gray-200 px-4 py-3 hover:bg-gray-50"
                  to="#"
                >
                  <p className="text-xs">
                    <span className="text-black">
                      Your subscription is about to expire
                    </span>{" "}
                    Renew your subscription to avoid interruptions.
                  </p>
                  <p className="text-xs">8 May, 2025</p>
                </Link>
              </li>

              <li>
                <Link
                  className="flex flex-col gap-2.5 border-t border-gray-200 px-4 py-3 hover:bg-gray-50"
                  to="#"
                >
                  <p className="text-xs">
                    <span className="text-black">New message from support</span>{" "}
                    You have a new reply from the support team regarding your
                    recent inquiry.
                  </p>
                  <p className="text-xs">6 May, 2025</p>
                </Link>
              </li>
            </ul>
            {/* List Notification */}
          </div>
        )}
      </li>
    </ClickedOutside>
  );
};

export default DropdownNotification;
