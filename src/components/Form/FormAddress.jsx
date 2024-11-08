import useFetchAddress from "../../hooks/useFetchAddress";
import useFetchPortalCode from "../../hooks/useFetchPostalCode";
import propTypes from "prop-types";
import Select from "./SelectOption";

const FormAddress = ({ formData, setFormData, formatOptions }) => {
  const { data: province } = useFetchAddress({
    endPoint: "provinsi",
  });

  const { data: city } = useFetchAddress({
    endPoint: "kabkota",
    from: "provinsi",
    id: formData.address?.province,
  });

  const { data: district } = useFetchAddress({
    endPoint: "kecamatan",
    from: "kabkota",
    id: formData.address?.city,
  });

  const { data: subDistrict } = useFetchAddress({
    endPoint: "kelurahan",
    from: "kecamatan",
    id: formData.address?.district,
  });

  const { data: postalCode } = useFetchPortalCode({
    cityId: formData.address?.city,
    districtId: formData.address?.district,
  });

  const handleAddressChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
  };

  return (
    <>
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
    </>
  );
};

FormAddress.propTypes = {
  formData: propTypes.object,
  setFormData: propTypes.func,
  formatOptions: propTypes.func,
};

export default FormAddress;
