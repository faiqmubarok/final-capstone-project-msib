import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import PageTitle from "./components/PageTitle";

import HomePage from "./pages/public/HomePage";
import AboutPage from "./pages/public/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import HelpPage from "./pages/public/HelpPage";

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
              <DashboardPage />
            </DashboardLayout>
          ) : (
            <LoginPage />
          )
        }
      />
    </Routes>
  );
};

export default App;
