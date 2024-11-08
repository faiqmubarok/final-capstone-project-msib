import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import FormAddress from "../../components/Form/FormAddress";
import FormPersonal from "../../components/Form/FormPersonal";
import dataUser from "../../data/dummy-userProfile.json";
import FormFinance from "../../components/Form/FormFinance";
import FormPhotoProfile from "../../components/Form/FormPhotoProfile";
import CardTemplate from "../../components/Card/CardTemplate";

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    phone: "",
    noKtp: "",
    finance: {
      bank: "",
      noRekening: "",
    },
    address: {
      province: "",
      city: "",
      district: "",
      subDistrict: "",
      postalCode: "",
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

  if(userProfile.province === null) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Breadcrumbs pageName="Profil" />

      <form
        onSubmit={handleUpdateProfile}
        className="grid grid-cols-5 gap-8 text-sm"
      >
        <section className="col-span-5 xl:col-span-3">
          {/* Personal Information */}
          <CardTemplate
            title={"Informasi Pribadi"}
            padding={"7"}
            containerClass={"mb-8"}
            titleClass={"text-base"}
            contentClass={"p-7"}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormPersonal
                formData={userProfile}
                handleInputChange={handleInputChange}
              />
            </div>
          </CardTemplate>

          {/* Address Information */}
          <CardTemplate
            title={"Alamat"}
            padding={"7"}
            containerClass={"mb-8"}
            titleClass={"text-base"}
            contentClass={"p-7"}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormAddress
                formData={userProfile}
                setFormData={setUserProfile}
                formatOptions={formatOptions}
              />
            </div>
          </CardTemplate>

          {/* Finance Information */}
          <CardTemplate
            title={"Keuangan"}
            padding={"7"}
            containerClass={"mb-8"}
            titleClass={"text-base"}
            contentClass={"p-7"}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormFinance
                formData={userProfile}
                setFormData={setUserProfile}
                formatOptions={formatOptions}
              />
            </div>
          </CardTemplate>
        </section>

        <section className="col-span-5 xl:col-span-2">
          {/* User Image */}
          <CardTemplate
            title={"Foto kamu"}
            padding={"7"}
            containerClass={"mb-8"}
            titleClass={"text-base"}
            contentClass={"p-7"}
          >
            <FormPhotoProfile
              formData={userProfile}
              setFormData={setUserProfile}
            />
          </CardTemplate>
          {/* Button Submit Changed */}
          <div className="rounded-sm border border-gray-100 bg-white shadow-md">
            <div className="p-8 text-sm">
              <div className=" mb-5 text-black font-medium space-y-1">
                <p>
                  Terakhir diubah pada :{" "}
                  <span className="font-normal">
                    {new Date().toLocaleDateString()}
                  </span>
                </p>
                <p>
                  Bergabung pada :{" "}
                  <span className="font-normal">
                    {new Date().toLocaleDateString()}
                  </span>
                </p>
              </div>
              <div className="flex gap-5">
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
          </div>
        </section>
      </form>
    </>
  );
};

export default Profile;
