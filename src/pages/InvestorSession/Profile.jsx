import { useEffect, useState, Suspense, lazy } from "react";
import { formatDistanceToNow, parseISO } from "date-fns";
import axios from "axios";
import { id } from "date-fns/locale";
import { useAlert } from "../../context/AlertContext";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CardTemplate from "../../components/Card/CardTemplate";
const FormAddress = lazy(() => import("../../components/Form/FormAddress"));
const FormPersonal = lazy(() => import("../../components/Form/FormPersonal"));
const FormFinance = lazy(() => import("../../components/Form/FormFinance"));
const FormPhotoProfile = lazy(() =>
  import("../../components/Form/FormPhotoProfile")
);

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    email: "",
    name: "",
    phone: "",
    noKtp: "",
    job: "",
    image: null,
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
  });
  const { showAlert } = useAlert();

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUser = async () => {
    try {
      const userId = JSON.parse(sessionStorage.getItem("authToken")).user.id;
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/users/getUser/${userId}/`
      );
      const data = response.data;
      setUserProfile({
        ...userProfile,
        email: data.email || "",
        name: data.name || "",
        phone: data.phone || "",
        noKtp: data.no_ktp || "",
        job: data.job || "",
        lastUpdate: data.last_update || "",
        dateJoined:
          new Date(data.date_joined).toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }) || "",
        image: data.photoProfile
          ? `${import.meta.env.VITE_BACKEND_URL}${response.data.photoProfile}`
          : null,
        finance: {
          bank: data.finance.bank || "",
          noRekening: data.finance.no_rekening || "",
        },
        address: {
          province: data.address.province || "",
          city: data.address.city || "",
          district: data.address.district || "",
          subDistrict: data.address.sub_district || "",
          postalCode: data.address.postal_code || "",
        },
      });
    } catch (error) {
      console.log(error);
      showAlert("error", "Gagal memuat data pengguna.");
    }
  };

  const updateUser = async (dataToSend) => {
    try {
      const userId = JSON.parse(sessionStorage.getItem("authToken")).user.id;
      console.log("data to send", dataToSend)
      const response = await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/users/updateUser/${userId}/`,
        dataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Wajib untuk mengirim file
          },
        }
      );
      console.log("data response", response.data);
      showAlert("success", "Data berhasil diupdate");
      fetchUser();
      setNewSessionStorage(response?.data);
    } catch (error) {
      console.log(error);
      showAlert("error", "Gagal mengupdte data.");
    }
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const dataToSend = {
      name: userProfile.name,
      no_ktp: userProfile.noKtp,
      phone: userProfile.phone,
      email: userProfile.email,
      job: userProfile.job,
      photoProfile: userProfile.image,
      address: {
        province: userProfile.address.province,
        city: userProfile.address.city,
        district: userProfile.address.district,
        sub_district: userProfile.address.subDistrict,
        postal_code: userProfile.address.postalCode,
      },
      finance: {
        bank: userProfile.finance.bank,
        no_rekening: userProfile.finance.noRekening,
      },
    };
    updateUser(dataToSend);
  };

  const setNewSessionStorage = (response) => {
    const sessionStorageData = JSON.parse(sessionStorage.getItem("authToken"));
    sessionStorageData.user.name = response?.name;
    sessionStorageData.user.job = response?.job;
    sessionStorageData.user.photoProfile = response?.photoProfile ? response.photoProfile : "";
    sessionStorage.setItem("authToken", JSON.stringify(sessionStorageData));
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

  const formattedLastUpdate = (lastUpdate) => {
    if (!lastUpdate) return "Tanggal tidak valid";
    return formatDistanceToNow(parseISO(lastUpdate), {
      addSuffix: true,
      locale: id,
    });
  };

  return (
    <>
      <Breadcrumbs pageName="Profil" />

      <form
        onSubmit={handleUpdateProfile}
        className="grid grid-cols-5 gap-8 text-sm"
        encType="multipart/form-data"
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
            <Suspense
              fallback={
                <div className="w-full p-4 flex justify-center items-center font-medium">
                  Memuat...
                </div>
              }
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormPersonal
                  formData={userProfile}
                  handleInputChange={handleInputChange}
                />
              </div>
            </Suspense>
          </CardTemplate>

          {/* Address Information */}
          <CardTemplate
            title={"Alamat"}
            padding={"7"}
            containerClass={"mb-8"}
            titleClass={"text-base"}
            contentClass={"p-7"}
          >
            <Suspense
              fallback={
                <div className="w-full p-4 flex justify-center items-center font-medium">
                  Memuat...
                </div>
              }
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormAddress
                  formData={userProfile}
                  setFormData={setUserProfile}
                  formatOptions={formatOptions}
                />
              </div>
            </Suspense>
          </CardTemplate>

          {/* Finance Information */}
          <CardTemplate
            title={"Keuangan"}
            padding={"7"}
            containerClass={"mb-8"}
            titleClass={"text-base"}
            contentClass={"p-7"}
          >
            <Suspense
              fallback={
                <div className="w-full p-4 flex justify-center items-center font-medium">
                  Memuat...
                </div>
              }
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormFinance
                  formData={userProfile}
                  setFormData={setUserProfile}
                  formatOptions={formatOptions}
                />
              </div>
            </Suspense>
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
            <Suspense
              fallback={
                <div className="w-full p-4 flex justify-center items-center font-medium">
                  Memuat...
                </div>
              }
            >
              <FormPhotoProfile
                formData={userProfile}
                setFormData={setUserProfile}
              />
            </Suspense>
          </CardTemplate>
          {/* Button Submit Changed */}
          <div className="rounded-sm border border-gray-100 bg-white shadow-md">
            <div className="p-8 text-sm">
              <div className=" mb-5 text-black font-medium space-y-1">
                <p>
                  Terakhir diubah pada :{" "}
                  <span className="font-normal">
                    {formattedLastUpdate(userProfile.lastUpdate)}
                  </span>
                </p>
                <p>
                  Bergabung pada :{" "}
                  <span className="font-normal">{userProfile.dateJoined}</span>
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
                  onClick={() => fetchUser()}
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
