import Input from "./Input";
import Select from "./SelectOption";
import useFetchBankList from "../../hooks/useFetchBankList";
import propTypes from "prop-types";

const FormFinance = ({ formData, setFormData, formatOptions}) => {
    const { data: bankList } = useFetchBankList();

    const handleInputChange = (name, value) => {
      setFormData((prevData) => ({
        ...prevData,
        finance: {
          ...prevData.finance,
          [name]: value
        }
      }));
    };
    

    const handleBankChange = (name, value) => {
      setFormData((prevData) => ({
        ...prevData,
        finance: {
          ...prevData.finance,
          [name]: value,
        },
      }));
    };

  return (
    <>
      <Select
        option={formatOptions(bankList)}
        selectedItem={formData.finance.bank}
        setSelectedItem={(id) => handleBankChange("bank", id)}
        id={"bank"}
        placeholder={"Pilih Bank"}
        content={"Pilih Bank"}
      />
      <Input
        value={formData.finance.noRekening}
        setValue={(e) => handleInputChange("noRekening", e.target.value)}
        type="text"
        id="noRekening"
        label="No. Rekening"
        placeholder="1234567890"
        name="noRekening"
      />
    </>
  );
};

FormFinance.propTypes = {
  formData: propTypes.object,
  setFormData: propTypes.func,
  formatOptions: propTypes.func,
}

export default FormFinance;
