import propTypes from "prop-types";
import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import { IoIosArrowRoundBack } from "react-icons/io";

const DashboardSidebar = ({ mainRoute, listMenu, sidebarOpen, setSidebarOpen }) => {
  const sidebar = useRef(null);
  const trigger = useRef(null);

  //   Close sidebar when clicked outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  //   Close Sidebar with ESC
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-hidden bg-greenPrimary duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between gap-2 p-6">
        <Logo link={mainRoute} />

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <IoIosArrowRoundBack className="w-7 h-7 text-white" />
        </button>
      </div>
      {/* Sidebar Header */}

      {/* Sidebar Menu */}
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
        <div className="mt-3 py-4 px-4 lg:px-6">
          <h3 className="mb-4 ml-4 text-sm font-semibold text-white">
            MENU UTAMA
          </h3>
          <ul className="mb-6 flex flex-col gap-3">
            {listMenu.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-2.5 rounded-lg py-3 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-orangePrimary ${
                      isActive ? "text-white bg-orangePrimary" : "text-white"
                    }`
                  }
                >
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Sidebar Menu */}
    </aside>
  );
};

DashboardSidebar.propTypes = {
  listMenu: propTypes.array,
  sidebarOpen: propTypes.bool,
  setSidebarOpen: propTypes.func,
  mainRoute: propTypes.string,
};

export default DashboardSidebar;
