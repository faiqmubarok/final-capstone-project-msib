import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageTitle from "./components/PageTitle";

// Context
import AppProvider from "./context/AppProvider";

// Layout
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Public Pages
import HomePage from "./pages/PublicSession/HomePage";
import CostumerPage from "./pages/PublicSession/CostumerPage";
import AboutPage from "./pages/PublicSession/AboutPage";
import HelpPage from "./pages/PublicSession/HelpPage";
import NotFound from "./pages/NotFound";

// Authentication
import LoginPage from "./pages/Authentication/LoginPage";
import RegisterPage from "./pages/Authentication/RegisterPage";

// Investor Pages
import Dashboard from "./pages/InvestorSession/Dashboard";
import Projects from "./pages/InvestorSession/Projects";
import Transaction from "./pages/InvestorSession/Transaction";
import DetailProject from "./pages/InvestorSession/DetailProject";
import Profile from "./pages/InvestorSession/Profile";
import Portfolio from "./pages/InvestorSession/Portfolio";

const isAuthenticated = () => {
  return !!sessionStorage.getItem("authToken");
};

const App = () => {
  const { pathname } = useLocation();
  const userIsLoggedIn = isAuthenticated();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AppProvider>
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
                <Dashboard />
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
                <Projects />
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

        {/* Not Found Page */}
        <Route
          path="*"
          element={
            <>
              <PageTitle title={"Not Found Page | Patani"} />
              <NotFound />
            </>
          }
        />
      </Routes>
    </AppProvider>
  );
};

export default App;
