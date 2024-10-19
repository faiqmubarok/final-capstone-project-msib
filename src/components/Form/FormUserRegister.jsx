import propTypes from "prop-types";
import Input from "./Input";
import Password from "./password";
import Select from "./SelectOption";

import useFetchAddress from "../../hooks/useFetchAddress";
import useFetchPortalCode from "../../hooks/useFetchPostalCode";
import useFetchBankList from "../../hooks/useFetchBankList";

const FormUserRegister = ({ formData, setFormData }) => {
  const { data: province } = useFetchAddress({
    endPoint: "provinsi",
  });

  const { data: city } = useFetchAddress({
    endPoint: "kabkota",
    from: "provinsi",
    id: formData.address.province?.id,
  });

  const { data: district } = useFetchAddress({
    endPoint: "kecamatan",
    from: "kabkota",
    id: formData.address.city?.id,
  });

  const { data: subDistrict } = useFetchAddress({
    endPoint: "kelurahan",
    from: "kecamatan",
    id: formData.address.district?.id,
  });

  const { data: postalCode } = useFetchPortalCode({
    cityId: formData.address.city?.id,
    districtId: formData.address.district?.id,
  });

  const { data: bankList } = useFetchBankList();

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

  const handleAddressChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
  };

  console.log(bankList)

  return (
    <>
      <div className="">
        <h2 className="font-medium col-span-1 md:col-span-2 mb-4 text-gray-800">
          Informasi Pribadi :
        </h2>
        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
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
        </div>
      </div>
      <div className="">
        <h2 className="font-medium col-span-1 md:col-span-2 mb-4 text-gray-700">
          Alamat :
        </h2>
        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
          <Select
            option={formatOptions(province)}
            selectedItem={formData.address.province}
            setSelectedItem={(id) => handleAddressChange("province", id)}
            id={"province"}
            placeholder={"Pilih provinsi"}
            content={"Pilih Provinsi"}
          />
          <Select
            option={formatOptions(city)}
            selectedItem={formData.address.city}
            setSelectedItem={(id) => handleAddressChange("city", id)}
            id={"city"}
            placeholder={"Pilih Kota"}
            content={"Pilih Kota"}
          />
          <Select
            option={formatOptions(district)}
            selectedItem={formData.address.district}
            setSelectedItem={(id) => handleAddressChange("district", id)}
            id={"district"}
            placeholder={"Pilih Kecamatan"}
            content={"Pilih Kecamatan"}
          />
          <Select
            option={formatOptions(subDistrict)}
            selectedItem={formData.address.subDistrict}
            setSelectedItem={(id) => handleAddressChange("subDistrict", id)}
            id={"subDistrict"}
            placeholder={"Pilih Kelurahan"}
            content={"Pilih Kelurahan"}
          />
          <Select
            option={formatOptions(postalCode)}
            selectedItem={formData.address.postalCode}
            setSelectedItem={(id) => handleAddressChange("postalCode", id)}
            id={"postalCode"}
            placeholder={"Pilih Kode Pos"}
            content={"Pilih Kode Pos"}
          />
        </div>
      </div>
      <div className="">
        <h2 className="font-medium col-span-1 md:col-span-2 mb-4 text-gray-700">
          Keuangan :
        </h2>
        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
          <Select
            option={formatOptions(bankList)}
            selectedItem={formData.bank}
            setSelectedItem={(id) => setFormData((prevData) => ({ ...prevData, bank: id }))}
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