import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import propTypes from "prop-types";

const PageTitle = ({ title }) => {
  const location = useLocation();
  useEffect(() => {
    document.title = title;
  }, [location, title]);

  return null;
};

PageTitle.propTypes = {
  title: propTypes.string,
};

export default PageTitle;
