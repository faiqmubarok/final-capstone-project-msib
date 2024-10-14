import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/LoginAndRegister/Input";
import Password from "../../components/LoginAndRegister/password";
import Logo from "../../components/Logo";
import { IoIosArrowRoundBack } from "react-icons/io";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] flex items-center justify-center flex-col bg-gray-50">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-lg relative">
          {/* Button Back */}
          <button
            className="p-2 absolute left-4 top-4 "
            onClick={handleBackButton}
          >
            <IoIosArrowRoundBack className="w-9 h-9" />
          </button>
          <div className="w-full flex justify-center items-center pt-10">
            <Logo />
          </div>
          <div className="p-6 sm:p-8 space-y-4 md:space-y-6 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Masuk ke akunmu
            </h1>
            <form className="space-y-4 md:space-y-6">
              <Input
                value={email}
                setValue={setEmail}
                type={"email"}
                content={"Email"}
                placeholder={"email"}
              />
              <Password
                password={password}
                setPassword={setPassword}
                content={"Password"}
              />
              <button
                type="submit"
                className="w-full text-white bg-orangePrimary hover:bg-orangeSecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Masuk
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Belum punya akun?{" "}
                <Link
                  to={"/register"}
                  className="font-medium text-orangePrimary hover:underline "
                >
                  Daftar
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
