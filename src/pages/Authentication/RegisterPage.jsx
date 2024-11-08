import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "../../components/Logo";
import ButtonBack from "../../components/ButtonBack";
import FormUserRegister from "../../components/Form/FormUserRegister";

const RegisterPage = () => {
  const [formRegister, setFormRegister] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    phone: "",
    noKtp: "",
    finance: {
      bank: "",
      noRekening: "",
    },
    address: {
      province: "",
      city: "",
      district: "",
      subDistrict: "",
      postalCode: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRegister);
  };

  return (
    <section className="w-[100vw] h-[100vh] flex items-center justify-center flex-col dashboard-body">
      <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md md:max-w-screen-lg max-h-[95%] overflow-y-auto relative">
        <div className="w-full flex justify-center items-center pt-10">
          <ButtonBack />
          <Logo />
        </div>
        <div className="p-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-4 md:mb-6">
            Buat akun
          </h1>
          <form onSubmit={handleSubmit} className="space-y-10">
            <FormUserRegister formData={formRegister} setFormData={setFormRegister} />
            <div className="flex flex-col items-center pb-4">
              <button
                type="submit"
                className="w-full text-white bg-orangePrimary hover:bg-orangeSecondary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center max-w-md"
              >
                Daftar
              </button>
            </div>
          </form>
          <p className="text-sm font-light text-gray-500 text-center">
            Sudah punya akun?{" "}
            <Link
              to="/login"
              className="font-medium text-orangePrimary hover:underline"
            >
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
