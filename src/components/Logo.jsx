import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src={"../../public/LogoPanani.svg"}
        className="h-8"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap uppercase text-orangePrimary font-poppins">
        Patani
      </span>
    </Link>
  );
};

export default Logo;
