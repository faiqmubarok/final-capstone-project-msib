import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Form/Input";
import Password from "../../components/Form/password";
import Logo from "../../components/Logo";
import ButtonBack from "../../components/ButtonBack";
import { useAlert } from "../../context/AlertContext";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
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
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/login/`,
        {
          email: formUserLogin.email,
          password: formUserLogin.password,
        }
      );
      showAlert("success", "Login Berhasil");
      setFormUserLogin({
        email: "",
        password: "",
      });
      const authData = {
        accessToken: response.data.access,
        refreshToken: response.data.refresh,
        user: {
          id: response.data.user.user_id,
          name: response.data.user_profile.name,
          job: response.data.user_profile.job,
          photoProfile: response.data.user_profile.photoProfile,
        },
      };
      sessionStorage.setItem("authToken", JSON.stringify(authData));
      navigate("/dashboard");
    } catch (error) {
      const errorMessage =
        error.response?.data?.non_field_errors ||
        "Terjadi Kesalahan pada server, silakan coba lagi.";

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
                id={"password"}
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
