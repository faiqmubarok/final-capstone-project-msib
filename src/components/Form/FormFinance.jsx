import Input from "./Input";
import Select from "./SelectOption";
import useFetchBankList from "../../hooks/useFetchBankList";
import propTypes from "prop-types";

const FormFinance = ({ formData, handleInputChange, setFormData, formatOptions}) => {
    const { data: bankList } = useFetchBankList();

  return (
    <>
      <Select
        option={formatOptions(bankList)}
        selectedItem={formData.bank}
        setSelectedItem={(id) =>
          setFormData((prevData) => ({ ...prevData, bank: id }))
        }
        id={"bank"}
        placeholder={"Pilih Bank"}
        content={"Pilih Bank"}
      />
      <Input
        value={formData.noRekening}
        setValue={handleInputChange}
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
  handleInputChange: propTypes.func,
  setFormData: propTypes.func,
  formatOptions: propTypes.func,
}

export default FormFinance;
