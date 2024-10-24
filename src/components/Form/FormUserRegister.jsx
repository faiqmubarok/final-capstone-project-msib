import propTypes from "prop-types";
import Password from "./password";
import FormAddress from "./FormAddress";
import FormPersonal from "./FormPersonal";
import FormFinance from "./FormFinance";

const FormUserRegister = ({ formData, setFormData }) => {
  const formatOptions = (data) => {
    return data?.map((item) => ({
      value: item.id,
      label: item.text,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="">
        <h2 className="font-medium col-span-1 md:col-span-2 mb-4 text-gray-800">
          Informasi Pribadi :
        </h2>
        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
          <FormPersonal
            formData={formData}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
      <div className="">
        <h2 className="font-medium col-span-1 md:col-span-2 mb-4 text-gray-700">
          Alamat :
        </h2>
        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
          <FormAddress
            formData={formData}
            setFormData={setFormData}
            formatOptions={formatOptions}
          />
        </div>
      </div>
      <div className="">
        <h2 className="font-medium col-span-1 md:col-span-2 mb-4 text-gray-700">
          Keuangan :
        </h2>
        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
          <FormFinance
            formData={formData}
            handleInputChange={handleInputChange}
            setFormData={setFormData}
            formatOptions={formatOptions}
          />
        </div>
      </div>
      <div className="">
        <h2 className="font-medium col-span-1 md:col-span-2 mb-4 text-gray-700">
          Akun
        </h2>
        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
          <Password
            password={formData.password}
            setPassword={(value) =>
              setFormData((prevData) => ({ ...prevData, password: value }))
            }
            content="Password"
          />
          <Password
            password={formData.confirmPassword}
            setPassword={(value) =>
              setFormData((prevData) => ({
                ...prevData,
                confirmPassword: value,
              }))
            }
            content="Konfirmasi Password"
            id="confirm-password"
          />
        </div>
      </div>
    </>
  );
};

FormUserRegister.propTypes = {
  formData: propTypes.object,
  setFormData: propTypes.func,
};

export default FormUserRegister;