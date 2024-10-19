import propTypes from "prop-types";
import Select from "react-select";

const banks = [
  { value: "BRI", label: "Bank Rakyat Indonesia (BRI)" },
  { value: "BCA", label: "Bank Central Asia (BCA)" },
  { value: "BNI", label: "Bank Negara Indonesia (BNI)" },
  { value: "Mandiri", label: "Bank Mandiri" },
  { value: "CIMB", label: "CIMB Niaga" },
  { value: "Maybank", label: "Maybank" },
  { value: "Permata", label: "Bank Permata" },
  { value: "Danamon", label: "Bank Danamon" },
  { value: "BTN", label: "Bank Tabungan Negara (BTN)" },
  { value: "Bukopin", label: "Bank Bukopin" },
  { value: "Mega", label: "Bank Mega" },
  { value: "OCBC", label: "OCBC NISP" },
  { value: "Panin", label: "Bank Panin" },
  { value: "Sinarmas", label: "Bank Sinarmas" },
  { value: "Muamalat", label: "Bank Muamalat" },
  { value: "BSI", label: "Bank Syariah Indonesia (BSI)" },
  { value: "Jatim", label: "Bank Jatim" },
  { value: "Jateng", label: "Bank Jateng" },
  { value: "Jabar", label: "Bank BJB (Jawa Barat dan Banten)" },
  { value: "DKI", label: "Bank DKI" },
  { value: "Nagari", label: "Bank Nagari" },
  { value: "Sumut", label: "Bank Sumut" },
  { value: "Sumsel Babel", label: "Bank Sumsel Babel" },
  { value: "Lampung", label: "Bank Lampung" },
  { value: "Kalsel", label: "Bank Kalsel" },
  { value: "Kalbar", label: "Bank Kalbar" },
  { value: "Kaltimtara", label: "Bank Kaltimtara" },
  { value: "Sulselbar", label: "Bank Sulselbar" },
  { value: "Sulutgo", label: "Bank SulutGo" },
  { value: "NTT", label: "Bank NTT" },
  { value: "NTB", label: "Bank NTB Syariah" },
  { value: "Maluku", label: "Bank Maluku" },
  { value: "Papua", label: "Bank Papua" },
  { value: "Aceh", label: "Bank Aceh Syariah" },
  { value: "Bengkulu", label: "Bank Bengkulu" },
];

const BankSelect = ({ selectedBank, setSelectedBank }) => {
  const handleChange = (selectedOption) => {
    setSelectedBank(selectedOption);
  };

  return (
    <div>
      <label
        htmlFor="bank"
        className="block mb-2 text-sm font-medium text-gray-500"
      >
        Pilih Bank:
      </label>
      <Select
        id="bank"
        value={selectedBank}
        onChange={handleChange}
        options={banks}
        styles={customStyles}
        placeholder="Pilih Bank"
        className="w-full"
        isSearchable
      />
    </div>
  );
};

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#f9fafb", // Tailwind bg-gray-50
    borderColor: "#d1d5db", // Tailwind border-gray-300
    color: "#374151", // Tailwind text-gray-900
    borderRadius: "0.5rem", // Tailwind rounded-lg
    padding: "0.2rem", // Tailwind p-2.5
    boxShadow: "none",
    "&:focus": {
      borderColor: "#10b981", // Tailwind focus:border-greenPrimary
      outline: "none",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#e26b13" // Tailwind bg-orangePrimary untuk opsi terpilih
      : state.isFocused
      ? "#f9fafb" // Tailwind bg-green-50 untuk hover
      : "#ffffff", // Tailwind bg-white
    color: state.isSelected ? "#ffffff" : "#374151", // Tailwind text-white untuk terpilih
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#374151", // Tailwind text-gray-900
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "0.5rem", // Tailwind rounded-lg
    borderColor: "#d1d5db", // Tailwind border-gray-300
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: "200px", // Mengatur tinggi maksimum container daftar opsi
    overflowY: "auto", // Agar daftar opsi bisa di-scroll jika melebihi maxHeight
  }),
};

BankSelect.propTypes = {
  selectedBank: propTypes.object,
  setSelectedBank: propTypes.func,
};

export default BankSelect;
