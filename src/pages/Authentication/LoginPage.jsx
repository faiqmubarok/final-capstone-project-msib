import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Form/Input";
import Password from "../../components/Form/password";
import Logo from "../../components/Logo";
import ButtonBack from "../../components/ButtonBack";

const LoginPage = () => {
  const [formUserLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
            <form className="grid grid-cols-1 gap-4 md:gap-6">
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
                  setUserLogin((prevData) => ({ ...prevData, password: value }))
                }
                content={"Password"}
              />
              <button
                type="submit"
                className="w-full text-white bg-orangePrimary hover:bg-orangeSecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
              >
                Masuk
              </button>
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
