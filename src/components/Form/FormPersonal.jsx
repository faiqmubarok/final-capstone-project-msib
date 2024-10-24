import Input from "./Input";
import propTypes from "prop-types";

const FormPersonal = ({formData, handleInputChange}) => {
  return (
    <>
      <Input
        value={formData.name}
        setValue={handleInputChange}
        type="text"
        id="name"
        label="Nama Lengkap"
        placeholder="nama kamu"
        name="name"
      />
      <Input
        value={formData.email}
        setValue={handleInputChange}
        type="email"
        id="email"
        label="Email"
        placeholder="name@company.com"
        name="email"
        autoComplete="email"
      />
      <Input
        value={formData.noKtp}
        setValue={handleInputChange}
        type="text"
        id="noKtp"
        label="No KTP"
        placeholder="1234567890"
        name="noKtp"
      />
      <Input
        value={formData.phone}
        setValue={handleInputChange}
        type="text"
        id="phone"
        label="No. Handphone"
        placeholder="08123456789"
        name="phone"
        autoComplete="tel"
      />
    </>
  );
};

FormPersonal.propTypes = {
  formData: propTypes.object.isRequired,
  handleInputChange: propTypes.func.isRequired,
};

export default FormPersonal;
