import { useState } from "react";
import propTypes from "prop-types";
import DashboardSidebar from "../components/Sidebar/DashboardSidebar";
import DashboardHeader from "../components/Header/DashboardHeader";
import ScrollToTop from "../components/ScrollToTop";

// Icon
import { MdDashboardCustomize } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { GoProjectRoadmap } from "react-icons/go";
import { CiUser } from "react-icons/ci";

const AdminLayout = ({ children }) => {
  const mainRoute = "/dashboard-admin";

  const menu = [
    {
      name: "Dashboard",
      icon: <MdDashboardCustomize className="w-5 h-5" />,
      link: "/dashboard-admin",
    },
    {
      name: "Proyek",
      icon: <GoProjectRoadmap className="w-5 h-5" />,
      link: "/project-admin",
    },
    { name: "User", icon: <CiUser className="w-5 h-5" />, link: "/user" },
    {
      name: "Transaksi",
      icon: <GrTransaction className="w-5 h-5" />,
      link: "/transaction-admin",
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

AdminLayout.propTypes = {
  children: propTypes.node,
};

export default AdminLayout;
