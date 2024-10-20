import propTypes from "prop-types";
import Select from "react-select";

const SelectOption = ({
  option,
  selectedItem,
  setSelectedItem,
  id,
  placeholder,
  content,
}) => {
  const selectedValue = selectedItem
    ? { value: selectedItem.id, label: selectedItem.name }
    : null;

  const handleChange = (selectedOption) => {
    const selectedData = {
      id: selectedOption.value,
      name: selectedOption.label,
    };
    setSelectedItem(selectedData);
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-500"
      >
        {content}:
      </label>
      <Select
        id={id}
        value={selectedValue}
        onChange={handleChange}
        options={option}
        styles={customStyles}
        placeholder={placeholder}
        className="w-full"
        isSearchable
        required
        autoComplete="off"
      />
    </div>
  );
};

SelectOption.propTypes = {
  option: propTypes.array,
  selectedItem: propTypes.object,
  setSelectedItem: propTypes.func,
  id: propTypes.string,
  placeholder: propTypes.string,
  content: propTypes.string,
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

export default SelectOption;
