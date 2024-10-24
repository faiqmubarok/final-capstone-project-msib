import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageTitle from "./components/PageTitle";

// Layout
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import AdminLayout from "./layouts/AdminLayout";

// Public Pages
import HomePage from "./pages/PublicSession/HomePage";
import CostumerPage from "./pages/PublicSession/CostumerPage";
import AboutPage from "./pages/PublicSession/AboutPage";
import HelpPage from "./pages/PublicSession/HelpPage";

// Authentication
import LoginPage from "./pages/Authentication/LoginPage";
import RegisterPage from "./pages/Authentication/RegisterPage";

// Investor Pages
import DashboardPage from "./pages/InvestorSession/DashboardPage";
import ProjectPage from "./pages/InvestorSession/ProjectPage";
import Transaction from "./pages/InvestorSession/Transaction";
import DetailProject from "./pages/InvestorSession/DetailProject";
import Profile from "./pages/InvestorSession/Profile";
import Portfolio from "./pages/InvestorSession/Portfolio";

// Admin Pages
import DashboardAdmin from "./pages/AdminSession/DashboardAdmin";

// const isAuthenticated = () => {
//   return !!sessionStorage.getItem("authToken");
// };

const App = () => {
  const { pathname } = useLocation();
  const userIsLoggedIn = true;
  const adminIsLoggedIn = true;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      {/* Public Session */}
      <Route
        path="/"
        element={
          <>
            <PageTitle title={"Pemodal | Patani"} />
            <PublicLayout>
              <HomePage />
            </PublicLayout>
          </>
        }
      />
      <Route
        path="/costumer"
        element={
          <>
            <PageTitle title={"Peminjam | Patani"} />
            <PublicLayout>
              <CostumerPage />
            </PublicLayout>
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <PageTitle title={"Tentang Kami | Patani"} />
            <PublicLayout>
              <AboutPage />
            </PublicLayout>
          </>
        }
      />
      <Route
        path="/help"
        element={
          <>
            <PageTitle title={"Bantuan | Patani"} />
            <PublicLayout>
              <HelpPage />
            </PublicLayout>
          </>
        }
      />

      {/* Dashboard Investor Session */}
      <Route
        path="/dashboard"
        element={
          userIsLoggedIn ? (
            <DashboardLayout>
              <PageTitle title={"Dashboard | Patani"} />
              <DashboardPage />
            </DashboardLayout>
          ) : (
            <LoginPage />
          )
        }
      />
      <Route
        path="/projects"
        element={
          userIsLoggedIn ? (
            <DashboardLayout>
              <PageTitle title={"Proyek | Patani"} />
              <ProjectPage />
            </DashboardLayout>
          ) : (
            <LoginPage />
          )
        }
      />
      <Route
        path="/project/:id"
        element={
          userIsLoggedIn ? (
            <DashboardLayout>
              <DetailProject />
            </DashboardLayout>
          ) : (
            <LoginPage />
          )
        }
      />
      <Route
        path="/transaction"
        element={
          userIsLoggedIn ? (
            <DashboardLayout>
              <PageTitle title={"Transaksi | Patani"} />
              <Transaction />
            </DashboardLayout>
          ) : (
            <LoginPage />
          )
        }
      />
      <Route
        path="/portfolio"
        element={
          userIsLoggedIn ? (
            <DashboardLayout>
              <PageTitle title={"Portfolio | Patani"} />
              <Portfolio />
            </DashboardLayout>
          ) : (
            <LoginPage />
          )
        }
      />
      <Route
        path="/profile"
        element={
          userIsLoggedIn ? (
            <DashboardLayout>
              <PageTitle title={"Profile | Patani"} />
              <Profile />
            </DashboardLayout>
          ) : (
            <LoginPage />
          )
        }
      />

      {/* Admin Session */}
      <Route
        path="/dashboard-admin"
        element={
          adminIsLoggedIn ? (
            <AdminLayout>
              <PageTitle title={"Admin | Patani"} />
              <DashboardAdmin />
            </AdminLayout>
          ) : (
            <LoginPage />
          )
        }
      />

      {/* Authentication */}
      <Route
        path="/login"
        element={
          <>
            <PageTitle title={"Masuk | Patani"} />
            <LoginPage />
          </>
        }
      />
      <Route
        path="/register"
        element={
          <>
            <PageTitle title={"Daftar | Patani"} />
            <RegisterPage />
          </>
        }
      />
    </Routes>
  );
};

export default App;
