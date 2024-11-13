import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Logo from "../../components/Logo";
import ButtonBack from "../../components/ButtonBack";
import FormUserRegister from "../../components/Form/FormUserRegister";
import { useAlert } from "../../context/AlertContext";

const RegisterPage = () => {
  const { showAlert } = useAlert();
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [formRegister, setFormRegister] = useState({
    email: "",
    name: "",
    password: "",
    phone: "",
    noKtp: "",
    job: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validasi Konfirmasi Password
    if (confirmPassword !== formRegister.password) {
      showAlert("error", "Kata Sandi dan Konfirmasi Kata Sandi tidak cocok.");
      setLoading(false);
      return;
    }

    // Membuat data yang akan dikirim
    const dataToSend = {
      email: formRegister.email, // Email yang akan menjadi username di model User
      password: formRegister.password, // Password untuk akun user
      user_profile: {
        // Data untuk UserProfile
        name: formRegister.name, // Nama lengkap pengguna
        phone: formRegister.phone, // Nomor telepon
        no_ktp: formRegister.noKtp, // Nomor KTP
        job: formRegister.job, // Pekerjaan
        address: {
          // Data alamat
          province: formRegister.address.province, // Provinsi
          city: formRegister.address.city, // Kota
          district: formRegister.address.district, // Kecamatan
          sub_district: formRegister.address.subDistrict, // Kelurahan
          postal_code: formRegister.address.postalCode, // Kode pos
        },
        finance: {
          // Data finansial
          bank: formRegister.finance.bank, // Nama bank
          no_rekening: formRegister.finance.noRekening, // Nomor rekening
        },
      },
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/register/`,
        dataToSend
      );
      showAlert("success", "Registrasi Berhasil");

      // Mengosongkan form setelah registrasi berhasil
      setFormRegister({
        email: "",
        name: "",
        password: "",
        phone: "",
        noKtp: "",
        job: "",
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
      setConfirmPassword("");
      navigate("/login");
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
      const errorMessage =
        error.response?.data?.message || "Registrasi Gagal, silakan coba lagi.";
      showAlert("error", errorMessage);
    } finally {
      setLoading(false);
    }
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
            <FormUserRegister
              formData={formRegister}
              setFormData={setFormRegister}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
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
                {loading ? "Memuat..." : "Daftar"}
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
