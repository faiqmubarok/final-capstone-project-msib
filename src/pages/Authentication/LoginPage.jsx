import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Form/Input";
import Password from "../../components/Form/password";
import Logo from "../../components/Logo";
import ButtonBack from "../../components/ButtonBack";
// import { useNavigate } from "react-router-dom";
import { useAlert } from "../../context/AlertContext";
import axios from "axios";

const LoginPage = () => {
  // const navigate = useNavigate();
  const { showAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [formUserLogin, setFormUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormUserLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formUserLogin);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login/`,
        {
          email: formUserLogin.email,
          password: formUserLogin.password,
        }
      );
      console.log(response);
      showAlert("success", "Registrasi Berhasil");
      setFormUserLogin;
      // const mockAuthToken = "mockAuthToken12345";
      // sessionStorage.setItem("authToken", mockAuthToken);
      // navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      const errorMessage =
        error.response?.data?.message || "Login Gagal, silakan coba lagi.";
      showAlert("error", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] flex items-center justify-center flex-col dashboard-body">
        <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-lg relative">
          <div className="w-full flex justify-center items-center pt-10">
            <ButtonBack />
            <Logo />
          </div>
          <div className="p-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-4 md:mb-6">
              Masuk ke akunmu
            </h1>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-4 md:gap-6"
            >
              <Input
                value={formUserLogin.email}
                setValue={handleInputChange}
                type="email"
                id="email"
                label="Email"
                placeholder="Masukkan email kamu"
                name="email"
                autoComplete="email"
              />
              <Password
                password={formUserLogin.password}
                setPassword={(value) =>
                  setFormUserLogin((prevData) => ({
                    ...prevData,
                    password: value,
                  }))
                }
                content={"Password"}
              />
              <div className="flex flex-col items-center pb-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center max-w-md ${
                    loading
                      ? "opacity-50 cursor-not-allowed bg-gray-500"
                      : "bg-orangePrimary hover:bg-orangeSecondary cursor-pointer"
                  }`}
                >
                  {loading ? "Memuat..." : "Masuk"}
                </button>
              </div>
            </form>
            <p className="text-sm font-light text-gray-500 text-center">
              Belum punya akun?{" "}
              <Link
                to={"/register"}
                className="font-medium text-orangePrimary hover:underline "
              >
                Daftar
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
