import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Logo = ({link}) => {
  return (
    <Link to={link || "/"} className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src={"/LogoPatani.svg"}
        className="h-8"
        loading="lazy"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap uppercase text-orangePrimary font-poppins">
        Patani
      </span>
    </Link>
  );
};

Logo.propTypes = {
  link: propTypes.string,
};

export default Logo;
