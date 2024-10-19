import proptypes from "prop-types";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ mainRoute, pageName, pageLink }) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-2xl font-semibold text-black font-inter">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2 text-gray-500 ">
          <li>
            <Link
              className="font-medium hover:text-orangePrimary"
              to={mainRoute ? mainRoute : "/dashboard"}
            >
              Dashboard
            </Link>
            <span> /</span>
          </li>
          {pageLink &&
            pageLink.map((link, index) => (
              <>
                <Link
                  className="font-medium hover:text-orangePrimary"
                  to={link.link}
                  key={index}
                >
                  {link.name}
                </Link>
                <span> /</span>
              </>
            ))}
          <li className=" text-orangePrimary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

Breadcrumbs.propTypes = {
  pageName: proptypes.string,
  mainRoute: proptypes.string,
  pageLink: proptypes.array,
};

export default Breadcrumbs;
