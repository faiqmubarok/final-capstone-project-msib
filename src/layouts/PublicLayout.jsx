import PublicHeader from "../components/Header/PublicHeader";
import PublicFooter from "../components/Footer/PublicFooter";
import propTypes from "prop-types";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <PublicHeader />
      <main className="mx-auto px-2.5 md:px-4 lg:px-8 max-w-screen-xl py-20">
        {children}
      </main>
      <PublicFooter />
    </>
  );
};

DefaultLayout.propTypes = {
  children: propTypes.node,
};

export default DefaultLayout;
