import { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";

const Address = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 
  const [selectedData, setSelectedData] = useState(null); 

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://kanglerian.github.io/api-wilayah-indonesia/api/provinces.json`
        );

        // Format react select
        const formattedData = response.data.map((province) => ({
          value: province.id,  
          label: province.name, 
        }));

        setData(formattedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAddress();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <label
        htmlFor="province"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Pilih Provinsi:
      </label>
      <Select
        id="province"
        value={selectedData}
        onChange={setSelectedData}
        options={data}
        styles={customStyles}
        placeholder="Pilih Provinsi"
        className="w-full"
        isSearchable
      />
    </div>
  );
};

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#f9fafb",
    borderColor: "#d1d5db",
    color: "#374151",
    borderRadius: "0.5rem",
    padding: "0.2rem",
    boxShadow: "none",
    "&:focus": {
      borderColor: "#10b981",
      outline: "none",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#e26b13"
      : state.isFocused
      ? "#f9fafb"
      : "#ffffff",
    color: state.isSelected ? "#ffffff" : "#374151",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#374151",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "0.5rem",
    borderColor: "#d1d5db",
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: "200px",
    overflowY: "auto",
  }),
};

export default Address;
