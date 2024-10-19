import propTypes from "prop-types";
import { useState } from "react";
import DashboardHeader from "../components/Header/DashboardHeader";
import DashboardSidebar from "../components/Sidebar/DashboardSidebar";
import ScrollToTop from "../components/ScrollToTop";
import "../styles/style.css";

// Icon
import { MdDashboardCustomize } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { BsSuitcaseLg } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";

const DashboardLayout = ({ children }) => {
  const mainRoute = "/dashboard";

  const menu = [
    {
      name: "Dashboard",
      icon: <MdDashboardCustomize className="w-5 h-5" />,
      link: "/dashboard",
    },
    {
      name: "Proyek",
      icon: <GoProjectRoadmap className="w-5 h-5" />,
      link: "/projects",
    },
    {
      name: "Portofolio",
      icon: <BsSuitcaseLg className="w-5 h-5" />,
      link: "/portfolio",
    },
    {
      name: "Transaksi",
      icon: <GrTransaction className="w-5 h-5" />,
      link: "/transaction",
    },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="font-poppins dashboard-body">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <DashboardSidebar
          mainRoute={mainRoute}
          listMenu={menu}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        {/* Sidebar */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* Header */}
          <DashboardHeader
            mainRoute={mainRoute}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          {/* Header */}

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-gray-100">
              {children}
            </div>
          </main>
          <ScrollToTop />
        </div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: propTypes.node,
};

export default DashboardLayout;
