import { NavLink, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import propTypes from "prop-types";
import Logo from "../Logo";

const Header = ({ onSidebarOpen }) => {
  const navigation = [
    { name: "Pemodal", href: "/" },
    { name: "Nasabah", href: "/costumer" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Bantuan", href: "/help" },
  ];

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo/>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link
              to={"/login"}
              type="button"
              className="text-white bg-orangePrimary hover:bg-orangeSecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 text-center flex items-center justify-center"
            >
              Masuk
            </Link>
            <button
              onClick={onSidebarOpen}
              type="button"
              className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
              <RxHamburgerMenu className="w-6 h-6" />
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              {navigation.map((item) => (
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:p-0 ${
                      isActive ? "text-orangePrimary underline" : "text-gray-900"
                    } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orangePrimary`
                  }
                  key={item.name}
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

Header.propTypes = {
  onSidebarOpen: propTypes.func,
};

export default Header;
