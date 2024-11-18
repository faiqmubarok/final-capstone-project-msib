import { Link } from "react-router-dom";
const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Oops! Halaman Tidak Ditemukan</h2>
        <p className="mt-2 text-gray-600 text-center">
          Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-greenPrimary text-white rounded-md shadow hover:bg-greenSecondary transition duration-300"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  };
  
  export default NotFound;
  