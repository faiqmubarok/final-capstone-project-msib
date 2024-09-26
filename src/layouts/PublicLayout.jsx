import PublicHeader from "../components/Header/PublicHeader";
import PublicFooter from "../components/Footer/PublicFooter";
import PublicSidebar from "../components/Sidebar/PublicSidebar";
import propTypes from "prop-types";
import { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";

const DefaultLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleOpenSidebar() {
    setSidebarOpen(true);
  }

  function handleCloseSidebar() {
    setSidebarOpen(false);
  }
  return (
    <>
      <PublicHeader onSidebarOpen={handleOpenSidebar} />
      <main className="mx-auto   font-poppins">
        {/* px-2.5 md:px-4 lg:px-8 py-24 max-w-screen-xl */}
        {children}
      </main>
      <ScrollToTop/>

      <PublicSidebar sidebarOpen={sidebarOpen} onSidebarClose={handleCloseSidebar} />
      <PublicFooter />
    </>
  );
};

DefaultLayout.propTypes = {
  children: propTypes.node,
};

export default DefaultLayout;
