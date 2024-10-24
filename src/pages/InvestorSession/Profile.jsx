import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import FormAddress from "../../components/Form/FormAddress";
import FormPersonal from "../../components/Form/FormPersonal";
import dataUser from "../../data/dummy-userProfile.json";
import FormFinance from "../../components/Form/FormFinance";
import FormPhotoProfile from "../../components/Form/FormPhotoProfile";

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    email: "",
    name: "",
    phone: "",
    noKtp: "",
    noRekening: "",
    bank: null,
    address: {
      province: null,
      city: null,
      district: null,
      subDistrict: null,
      postalCode: null,
    },
    image: null,
  });

  useEffect(() => {
    setUserProfile(dataUser);
  }, []);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log("Profil diupdate:", userProfile);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formatOptions = (data) => {
    return data?.map((item) => ({
      value: item.id,
      label: item.text,
    }));
  };

  return (
    <>
      <Breadcrumbs pageName="Profil" />
      <form
        onSubmit={handleUpdateProfile}
        className="grid grid-cols-5 gap-8 text-sm"
      >
        <section className="col-span-5 xl:col-span-3">
          {/* Personal Information */}
          <div className="rounded-sm border border-gray-100 bg-white shadow-md mb-8">
            <div className="border-b border-gray-100 py-4 px-7 ">
              <h3 className="font-medium text-black">Informasi Pribadi</h3>
            </div>
            <div className="p-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormPersonal
                  formData={userProfile}
                  handleInputChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="rounded-sm border border-gray-100 bg-white shadow-md mb-8">
            <div className="border-b border-gray-100 py-4 px-7 ">
              <h3 className="font-medium text-black">Alamat</h3>
            </div>
            <div className="p-7">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormAddress
                  formData={userProfile}
                  setFormData={setUserProfile}
                  formatOptions={formatOptions}
                />
              </div>
            </div>
          </div>

          {/* Finance Information */}
          <div className="rounded-sm border border-gray-100 bg-white shadow-md">
            <div className="border-b border-gray-100 py-4 px-7 ">
              <h3 className="font-medium text-black">Keuangan</h3>
            </div>
            <div className="p-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormFinance
                  formData={userProfile}
                  handleInputChange={handleInputChange}
                  setFormData={setUserProfile}
                  formatOptions={formatOptions}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="col-span-5 xl:col-span-2">
          {/* User Image */}
          <div className="rounded-sm border border-gray-100 bg-white shadow-md mb-8">
            <div className="border-b border-gray-100 py-4 px-7 ">
              <h3 className="font-medium text-black ">Foto kamu</h3>
            </div>
            <FormPhotoProfile formData={userProfile} setFormData={setUserProfile} />
          </div>
          {/* Button Submit Changed */}
          <div className="rounded-sm border border-gray-100 bg-white shadow-md">
            <div className="flex gap-5 text-sm p-8">
              <button
                onClick={handleUpdateProfile}
                className="flex justify-center rounded bg-orangePrimary py-2 px-6 font-medium text-white hover:bg-orangeSecondary"
                type="submit"
              >
                Simpan Perubahan
              </button>
              <button
                className="flex justify-center rounded border border-gray-100 py-2 px-6 font-medium text-black hover:shadow-sm"
                type="button"
              >
                Batalkan
              </button>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default Profile;
