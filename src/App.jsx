import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageTitle from "./components/PageTitle";

// Layout
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import AdminLayout from "./layouts/AdminLayout";

// Public Pages
import HomePage from "./pages/public/HomePage";
import CostumerPage from "./pages/public/CostumerPage";
import AboutPage from "./pages/public/AboutPage";
import HelpPage from "./pages/public/HelpPage";

// Auth
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

// Investor Pages
import DashboardPage from "./pages/investor/DashboardPage";
import ProjectPage from "./pages/investor/ProjectPage";
import Transaction from "./pages/investor/Transaction";

// Admin Pages
import DashboardAdmin from "./pages/admin/DashboardAdmin";

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
      {/* Halaman Public */}
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

      {/* Halaman Login */}
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

      {/* Halaman Dashboard */}
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
        path="/project"
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
      
      {/* Halaman Admin */}
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
    </Routes>
  );
};

export default App;
