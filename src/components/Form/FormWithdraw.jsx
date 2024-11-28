import { useState, useEffect } from "react";
import propTypes from "prop-types";
import { MdErrorOutline } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAlert } from "../../context/AlertContext";

const FormWithdraw = ({ portfolio, setIsModalOpen, fetchPortfolio }) => {
  const userId = JSON.parse(sessionStorage.getItem("authToken")).user.id;
  const [withdraw, setWithdraw] = useState({
    amount: 0,
    accountNumber: null,
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { showAlert } = useAlert();
  const availableBalance = parseInt(portfolio?.invested_amount, 10);
  const presetAmounts = [
    500000, 1000000, 3000000, 5000000, 10000000, 15000000, 20000000,
  ];

  useEffect(() => {
    const fetchRekening = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/users/getUser/${userId}/`
        );
        const data = response.data;
        setWithdraw((prevState) => ({
          ...prevState,
          accountNumber: data.finance,
        }));
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data rekening:", error);
      }
    };
    fetchRekening();
  }, [userId]);

  const handleSliderChange = (e) => {
    const amount = Number(e.target.value);
    setWithdraw((prevState) => ({
      ...prevState,
      amount,
    }));
  };

  const handleWithdraw = async (e) => {
    e.preventDefault();
    const { amount, accountNumber } = withdraw;

    if (amount <= 0) {
      setError("Jumlah penarikan harus lebih dari 0.");
      return;
    }

    setError("");
    setIsLoading(true);

    const postWithdraw = async () => {
      try {
        const dataToSend = {
          user_id: Number(userId),
          project_id: portfolio?.project.id,
          amount: parseInt(amount, 10),
          payment_method: `${accountNumber.bank}(${accountNumber.no_rekening})`,
        };
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/transactions/withdraw/`,
          dataToSend
        );
        if (response.status === 201) {
          setIsModalOpen(false);
          showAlert("success", "Tarik dana berhasil!");
          fetchPortfolio();
        }
        setWithdraw((prevState) => ({
          ...prevState,
          amount: 0,
        }));
      } catch (error) {
        console.error("Terjadi kesalahan saat melakukan tarik dana:", error);
      } finally {
        setIsLoading(false);
      }
    };

    postWithdraw();
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handlePresetClick = (amount) => {
    setWithdraw((prev) => ({
      ...prev,
      amount,
    }));
    setError("");
  };

  return (
    <form onSubmit={handleWithdraw} className="p-6 text-black">
      {/* Rekening Tujuan */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1.5">
          <h2 className="block text-sm font-medium mb-2">Rekening tujuan:</h2>
          <Link
            to={"/profile"}
            className="text-sm hover:underline text-orangePrimary"
          >
            Ubah
          </Link>
        </div>
        <div className="py-6 px-4 border border-gray-200 rounded-md flex justify-between items-center font-semibold">
          {withdraw.accountNumber ? (
            <>
              <span>{withdraw.accountNumber.bank}</span>
              <span>{withdraw.accountNumber.no_rekening}</span>
            </>
          ) : (
            <span className="text-gray-500">Memuat data rekening...</span>
          )}
        </div>
      </div>

      {/* Slider amount */}
      <div className="mb-6">
        <label htmlFor="amount" className="text-sm font-medium">
          Jumlah Penarikan:
        </label>
        <input
          type="range"
          id="amount"
          min="0"
          max={availableBalance}
          value={withdraw.amount}
          onChange={handleSliderChange}
          className="w-full h-2 bg-blue-400 rounded-lg appearance-none cursor-pointer transition-all hover:bg-blue-500 active:bg-blue-500"
        />
        <div className="flex justify-between text-sm mb-4">
          <span>{formatCurrency(0)}</span>
          <span>{formatCurrency(availableBalance)}</span>
        </div>
        <div className="text-center text-lg font-semibold mb-6">
          {formatCurrency(withdraw.amount)}
        </div>
        <div className="flex flex-wrap items-center text-xs font-medium gap-2 max-w-md">
          {presetAmounts.map((preset) => (
            <button
              key={preset}
              type="button"
              disabled={availableBalance < preset}
              onClick={() => handlePresetClick(preset)}
              className="rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-gray-100 transition-colors duration-300 hover:cursor-pointer"
            >
              {preset.toLocaleString("id-ID")}
            </button>
          ))}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-600 text-sm mb-3 flex items-center">
          <MdErrorOutline className="w-4 h-4 mr-3" />
          {error}
        </div>
      )}

      <hr />

      <button
        type="submit"
        className="w-full bg-orangePrimary text-white font-semibold rounded-md hover:bg-orangeSecondary transition-colors py-2.5 mt-4"
        disabled={isLoading}
      >
        {isLoading ? "Memuat..." : "Tarik Dana"}
      </button>
    </form>
  );
};

FormWithdraw.propTypes = {
  portfolio: propTypes.object,
  setIsModalOpen: propTypes.func,
  fetchPortfolio: propTypes.func,
};

export default FormWithdraw;
