import { FiUpload } from "react-icons/fi";
import { useState, useEffect } from "react";
import propTypes from "prop-types";

const FormPhotoProfile = ({ formData, setFormData }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now());
  const [uploadMessage, setUploadMessage] = useState("");
  const [isInputDisabled, setIsInputDisabled] = useState(false); // State untuk mengontrol status input

  // useEffect untuk menampilkan gambar yang sudah ada di formData.image
  useEffect(() => {
    if (formData.image) {
      setImagePreview(
        typeof formData.image === "string"
          ? formData.image
          : URL.createObjectURL(formData.image)
      );
      setIsInputDisabled(true); // Nonaktifkan input jika sudah ada gambar
    }
  }, [formData.image]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 800 * 1024) {
        // Batas ukuran 800KB
        setUploadMessage("File terlalu besar. Maksimal 800KB.");
        return;
      }
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
      setUploadMessage("Gambar berhasil diunggah!");
      setIsInputDisabled(true); // Nonaktifkan input setelah gambar diunggah
    }
  };

  const handleDelete = () => {
    setFormData((prev) => ({ ...prev, image: null }));
    setImagePreview(null);
    setFileInputKey(Date.now());
    setUploadMessage("Gambar telah dihapus.");
    setIsInputDisabled(false); // Aktifkan kembali input setelah gambar dihapus
  };

  return (
    <>
      <div className="mb-4 flex items-center gap-3">
        <div className="h-14 w-14 rounded-full overflow-hidden shadow-lg">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="User"
              className="h-full w-full object-cover transition-transform duration-200 transform scale-105"
            />
          ) : (
            <div className="h-full w-full bg-gray-300 flex items-center justify-center text-gray-500 text-[8px] text-center leading-3">
              Tidak ada gambar
            </div>
          )}
        </div>
        <div>
          <span className="mb-1.5 text-black font-semibold">
            Ubah foto kamu
          </span>
          <span className="flex gap-2.5">
            {imagePreview ? (
              <button
                type="button"
                onClick={handleDelete}
                className="text-sm text-red-600 hover:underline"
              >
                Hapus
              </button>
            ) : (
              <button type="button" className="text-sm text-blue-600 hover:underline">
                Unggah
              </button>
            )}
          </span>
        </div>
      </div>

      <div
        id="FileUpload"
        className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded-lg border border-dashed border-orangePrimary bg-gray-100 py-4 px-4 sm:py-7"
      >
        <input
          key={fileInputKey}
          type="file"
          accept="image/jpeg, image/png, image/gif"
          onChange={handleImageChange}
          disabled={isInputDisabled} // Nonaktifkan input jika sudah ada gambar
          className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none disabled:cursor-not-allowed"
        />
        <div className="flex flex-col items-center justify-center space-y-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white shadow-lg dark:border-strokedark dark:bg-boxdark">
            <FiUpload className="text-orangePrimary" />
          </span>
          <p className="text-center">
            {imagePreview ? (
              <span className="text-green-600">Gambar berhasil diunggah!</span>
            ) : (
              <span className="text-orangePrimary">Klik untuk mengunggah</span>
            )}
          </p>
          <p className="mt-1.5 text-gray-700">PNG, JPG, JPEG, atau GIF</p>
          <p className="mt-1.5 text-gray-700">Ukuran maksimal: 800 KB</p>
        </div>
      </div>
      {uploadMessage && (
        <p className="text-sm mt-2 text-center text-black">{uploadMessage}</p>
      )}
    </>
  );
};

FormPhotoProfile.propTypes = {
  formData: propTypes.object,
  setFormData: propTypes.func,
};

export default FormPhotoProfile;
