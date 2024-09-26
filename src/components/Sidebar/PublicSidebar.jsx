import { NavLink } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import propTypes from "prop-types";
import { useEffect } from "react";
import Logo from "../Logo";

const PublicSidebar = ({ sidebarOpen, onSidebarClose }) => {
  const navigation = [
    { name: "Pemodal", href: "/" },
    { name: "Nasabah", href: "/costumer" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Bantuan", href: "/help" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        onSidebarClose();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onSidebarClose]);

  return (
    <>
      <aside
        className={`fixed top-0 right-0 z-40 w-72 h-screen transition-transform duration-300 ease-in-out shadow-lg ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col w-full h-full overflow-y-scroll bg-gray-50 border border-white/20 px-3 py-5 md:px-6 gap-8 ">
          {/* Logo & Close Button */}
          <div className="flex justify-between items-center">
            <Logo/>
            <button
              onClick={() => onSidebarClose()}
              className="text-black p-2 hover:bg-accentColor rounded-full"
            >
              <IoIosClose className="w-8 h-8" />
            </button>
          </div>
          {/* Logo & Close Button */}
          <ul className="flex flex-col gap-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  onClick={() => onSidebarClose()}
                  className={({ isActive }) =>
                    `block p-4 rounded md:p-0 ${
                      isActive ? "text-orangePrimary" : "text-gray-900"
                    } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orangePrimary`
                  }
                  key={item.name}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-30"
          onClick={() => onSidebarClose()}
        ></div>
      )}
    </>
  );
};

PublicSidebar.propTypes = {
  sidebarOpen: propTypes.bool.isRequired,
  onSidebarClose: propTypes.func.isRequired,
};

export default PublicSidebar;
