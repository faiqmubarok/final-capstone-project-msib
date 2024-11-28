import { useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
import propTypes from "prop-types";
import { useAlert } from "../../context/AlertContext";
import { useNavigate } from "react-router-dom";

const FormTopup = ({ setIsModalOpen }) => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const { id } = useParams();
  const [dataTopUp, setDataTopUp] = useState({
    amount: 1000000,
    paymentMethod: "",
  });
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [error, setError] = useState("");
  const userId = JSON.parse(sessionStorage.getItem("authToken")).user.id;
  const presetAmounts = [
    1000000, 3000000, 5000000, 10000000, 15000000, 20000000,
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "amount") {
      const sanitizedValue = value.replace(/\./g, "");
      if (!isNaN(sanitizedValue) && sanitizedValue !== "") {
        setDataTopUp((prev) => ({
          ...prev,
          amount: sanitizedValue,
        }));
      }
    } else {
      setDataTopUp((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    setError("");
  };

  const handlePresetClick = (amount) => {
    setDataTopUp((prev) => ({
      ...prev,
      amount,
    }));
    setError("");
  };

  const postData = async () => {
    try {
      const dataToSend = {
        user_id: Number(userId),
        project_id: id,
        amount: parseInt(dataTopUp.amount, 10), 
        payment_method: dataTopUp.paymentMethod,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/transactions/topup/`,
        dataToSend
      );

      if (response.status === 201) {
        setIsModalOpen(false);
        showAlert("success", "Setor dana berhasil!");
        navigate("/portfolio");
      }
    } catch (error) {
      console.error(
        "Error posting data:",
        error.response ? error.response.data : error.message
      );
      showAlert("error", "Terjadi kesalahan saat mengirim data.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, paymentMethod } = dataTopUp;

    if (!amount || Number(amount) < 1000000) {
      setError("Jumlah top-up harus lebih dari Rp 1.000.000");
      return;
    }

    if (!paymentMethod) {
      setError("Silakan pilih metode pembayaran.");
      return;
    }

    if (!agreementChecked) {
      setError("Anda harus menyetujui syarat dan ketentuan.");
      return;
    }

    postData();

    setDataTopUp({ amount: 1000000, paymentMethod: "" });
    setAgreementChecked(false);
  };

  return (
    <form className="p-6 text-black" onSubmit={handleSubmit}>
      {/* Amount */}
      <div className="mb-6 space-y-4">
        <label htmlFor="amount" className="font-medium">
          Masukkan jumlah transaksi (Rp):
          <span className="block text-xs text-gray-500 mt-1 font-normal">
            Minimum transaksi Rp 1.000.000
          </span>
        </label>
        <input
          id="amount"
          name="amount"
          inputMode="numeric"
          type="text"
          value={Number(dataTopUp.amount).toLocaleString("id-ID")}
          onChange={handleInputChange}
          placeholder="Min. Rp 1.000.000"
          className="w-full p-2 border rounded-md"
        />
        <div className="flex flex-wrap items-center text-xs font-medium gap-2">
          {presetAmounts.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => handlePresetClick(preset)}
              className="rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200"
            >
              {preset.toLocaleString("id-ID")}
            </button>
          ))}
        </div>
      </div>

      {/* Payment Method */}
      <div className="mb-6 space-y-4 font-normal">
        <h3 className="font-medium text-base">Pilih metode pembayaran:</h3>
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            name="paymentMethod"
            value="Bank Transfer"
            checked={dataTopUp.paymentMethod === "Bank Transfer"}
            onChange={handleInputChange}
          />
          <span>Bank Transfer</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            name="paymentMethod"
            value="E-Wallet"
            checked={dataTopUp.paymentMethod === "E-Wallet"}
            onChange={handleInputChange}
          />
          <span>E-Wallet (Gopay, OVO, dll.)</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            name="paymentMethod"
            value="Credit Card"
            checked={dataTopUp.paymentMethod === "Credit Card"}
            onChange={handleInputChange}
          />
          <span>Kartu Kredit</span>
        </label>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-600 text-sm mb-3 flex items-center">
          <MdErrorOutline className="w-4 h-4 mr-3" />
          {error}
        </div>
      )}

      <hr />
      {/* Perhatian & Submit Button */}
      <div className="mt-3">
        <label className="flex items-center space-x-3 text-xs text-gray-500 mb-3">
          <input
            type="checkbox"
            checked={agreementChecked}
            onChange={() => setAgreementChecked((prev) => !prev)}
          />
          <span className="max-w-[580px] text-justify">
            Saya memahami bahwa investasi ini memiliki risiko tinggi, dan
            penarikan dana hanya dapat dilakukan setelah proyek selesai. Untuk
            informasi lebih lanjut, silakan baca
            <a
              href="/syarat-dan-ketentuan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orangePrimary underline hover:text-orangeSecondary ml-1"
            >
              Syarat & Ketentuan
            </a>
            .
          </span>
        </label>
        <button
          type="submit"
          className="w-full bg-orangePrimary text-white font-semibold  rounded-md hover:bg-orangeSecondary transition-colors py-2.5"
        >
          Bayar
        </button>
      </div>
    </form>
  );
};

FormTopup.propTypes = {
  setIsModalOpen: propTypes.func,
};

export default FormTopup;
