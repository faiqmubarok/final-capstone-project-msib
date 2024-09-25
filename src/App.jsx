import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import HomePage from "./pages/public/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";

const isAuthenticated = () => {
  return !!localStorage.getItem("authToken");
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
          <PublicLayout>
            <HomePage />
          </PublicLayout>
        }
      />
      <Route
        path="/about"
        element={
          <PublicLayout>
            <HomePage />
          </PublicLayout>
        }
      />

      {/* Halaman Login */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

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
