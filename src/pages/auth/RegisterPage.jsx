import { Link } from "react-router-dom";
import Password from "../../components/LoginAndRegister/password";
import Input from "../../components/LoginAndRegister/Input";
import Logo from "../../components/Logo";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [noKtp, setNoKtp] = useState("");

  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <section className="w-[100vw] h-[100vh] flex items-center justify-center flex-col bg-gray-50">
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md md:max-w-screen-lg max-h-full overflow-scroll relative">
        <button
          className="p-2 absolute left-4 top-4 "
          onClick={handleBackButton}
        >
          <IoIosArrowRoundBack className="w-9 h-9" />
        </button>
        <div className="w-full flex justify-center items-center pt-10">
          <Logo />
        </div>
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Buat akun
          </h1>
          <form className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 ">
            <Input
              value={name}
              setValue={setName}
              type="text"
              content="Nama Lengkap"
              placeholder="masukkan nama lengkap"
            />
            <Input
              value={email}
              setValue={setEmail}
              type="email"
              content="Email"
              placeholder="nama@company.com"
            />
            <Input
              value={noKtp}
              setValue={setNoKtp}
              type="text"
              content="No. KTP"
              placeholder="1234567890"
            />
            <Input
              value={phone}
              setValue={setPhone}
              type="text"
              content="No Handphone"
              placeholder="08123456789"
            />
            <Password
              password={password}
              setPassword={setPassword}
              content="Password"
            />
            <Password
              password={confirmPassword}
              setPassword={setConfirmPassword}
              content="Konfirmasi Password"
            />
            <div className="col-span-1 lg:col-span-2 flex flex-col items-center mt-5">
              <button
                type="submit"
                className="w-full text-white bg-orangePrimary hover:bg-orangeSecondary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4 max-w-md"
              >
                Daftar
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Sudah punya akun?{" "}
                <Link
                  to={"/login"}
                  className="font-medium text-orangePrimary hover:underline "
                >
                  Masuk
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
