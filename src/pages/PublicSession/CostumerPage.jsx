import { FaFish } from "react-icons/fa";
import { GiFarmer, GiFishingBoat } from "react-icons/gi";
import images from "../../images/images";
import CardPublic from "../../components/Card/CardPublic";
import { FaCheck, FaIdCard, FaClipboardCheck } from "react-icons/fa6";
import CardTestimony from "../../components/Card/CardTestimony";

const CostumerPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
        {/* Dekorasi berbentuk bulat di kiri atas */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-orangePrimary rounded-full opacity-30 blur-2xl"></div>

        {/* Dekorasi berbentuk bulat di kanan bawah */}
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-orangeSecondary rounded-full opacity-40 blur-3xl"></div>

        <div className="relative flex flex-col md:flex-row items-center max-w-screen-xl px-2.5 md:px-4 lg:px-8 mx-auto pt-32 lg:pt-0 z-10">
          {/* Bagian Teks */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Mudah Akses Modal untuk Usaha Anda
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-8">
              Petani, Nelayan, dan Peternak bisa berkembang bersama kami dengan
              modal yang cepat dan transparan.
            </p>
            <button className="bg-orangePrimary text-white font-semibold py-3 px-8 rounded-full hover:bg-orangeSecondary transition duration-300 shadow-lg hover:shadow-xl">
              Ajukan Sekarang
            </button>
          </div>

          {/* Bagian Gambar */}
          <div className="mt-10 md:mt-0 md:w-1/2 relative w-full">
            <img
              src={images.fishery}
              alt="Gambar Hero"
              className="rounded-lg shadow-lg max-w-full h-auto transform hover:scale-105 transition duration-500"
            />
            {/* Dekorasi bentuk persegi panjang di belakang gambar */}
            <div className="absolute -z-10 top-10 left-10 w-full h-full bg-gray-300 rounded-lg opacity-30 transform rotate-3"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Layanan Kami untuk Anda
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-3 lg:gap-10 max-w-screen-xl mx-auto text-sm px-2.5 md:px-4 lg:px-8">
          <CardPublic
            icon={
              <GiFarmer className="text-greenPrimary text-6xl mx-auto mb-6" />
            }
            title={"Pinjaman Pertanian"}
            article={
              "Dapatkan akses modal untuk membeli alat dan bibit yang dibutuhkan, serta meningkatkan hasil panen Anda."
            }
          />
          <CardPublic
            icon={<FaFish className="text-blue-600 text-6xl mx-auto mb-6" />}
            title={"Pinjaman Perikanan"}
            article={
              "Bantuan modal untuk nelayan dalam membeli peralatan baru atau meningkatkan kapasitas tangkapan."
            }
          />
          <CardPublic
            icon={
              <GiFishingBoat className="text-orangeSecondary text-6xl mx-auto mb-6" />
            }
            title={"Pinjaman Peternakan"}
            article={
              "Membantu peternak dalam pengadaan ternak baru dan meningkatkan produktivitas usaha peternakan Anda."
            }
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            Mengapa Memilih Kami?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 max-w-screen-xl mx-auto px-2.5 md:px-4 lg:px-8">
            <div>
              <img
                loading="lazy"
                src={images.agriculture2}
                alt="Mengapa Kami"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="text-left flex flex-col items-center lg:items-start justify-center text-sm">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Mudah, Aman, dan Transparan
              </h3>
              <p className="text-justify">
                Kami menawarkan proses pinjaman yang mudah, aman, dan transparan
                dengan suku bunga yang rendah dan layanan yang ramah pengguna.
              </p>
              <ul className="mt-6 list-disc list-inside">
                <li className="mb-2">Proses pengajuan online yang mudah</li>
                <li className="mb-2">Suku bunga rendah dan kompetitif</li>
                <li className="mb-2">Pendampingan dari awal hingga akhir</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white text-center mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Cara Mengajukan Pinjaman
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-3 lg:gap-10 max-w-screen-xl mx-auto text-sm px-2.5 md:px-4 lg:px-8">
          <CardPublic
            icon={
              <FaCheck className="bg-[#f9e6d8] rounded-full p-4 text-[#e26b13] w-14 h-14 mb-6 mx-auto" />
            }
            title={"1. Isi Formulir"}
            article={"Lengkapi informasi yang diperlukan di formulir kami."}
          />
          <CardPublic
            icon={
              <FaIdCard className="bg-[#f9e6d8] rounded-full p-4 text-[#e26b13] w-14 h-14 mb-6 mx-auto" />
            }
            title={"2. Verifikasi"}
            article={"Lengkapi informasi yang diperlukan di formulir kami."}
          />
          <CardPublic
            icon={
              <FaClipboardCheck className="bg-[#f9e6d8] rounded-full p-4 text-[#e26b13] w-14 h-14 mb-6 mx-auto" />
            }
            title={"3. Tunggu Persetujuan"}
            article={"Tunggu proses verifikasi dan persetujuan dari tim kami."}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-14">Testimoni Peminjam</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-3 lg:gap-10 max-w-screen-xl mx-auto text-sm px-2.5 md:px-4 lg:px-8">
          <CardTestimony
            writer={"Agus"}
            image={"https://randomuser.me/api/portraits/men/73.jpg"}
            comment={
              "Berkat platform ini, saya dapat membeli bibit baru dan meningkatkan hasil panen saya."
            }
            partisipant={"Petani"}
          />
          <CardTestimony
            image={"https://randomuser.me/api/portraits/women/73.jpg"}
            writer={"Rani"}
            comment={
              "Modal yang saya dapatkan membantu usaha perikanan saya berkembang dengan pesat."
            }
            partisipant={"Nelayan"}
          />
          <CardTestimony
            image={"https://randomuser.me/api/portraits/men/71.jpg"}
            writer={"Sumanto"}
            comment={
              "Pinjaman ini memudahkan saya dalam membeli ternak baru dan meningkatkan produksi."
            }
            partisipant={"Peternak"}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orangeSecondary to-greenPrimary text-white py-20 text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Ingin Mengembangkan Usaha Anda?
          </h2>
          <p className=" mb-8">
            Daftarkan diri Anda sekarang dan ajukan pinjaman untuk usaha Anda.
          </p>
          <button className="bg-orangePrimary text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-orange-500 hover:scale-105 transition-transform duration-300">
            Ajukan Pinjaman Sekarang
          </button>
        </div>
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-10 rounded-full w-80 h-80"></div>
        <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 bg-white bg-opacity-10 rounded-full w-80 h-80"></div>
      </section>
    </>
  );
};

export default CostumerPage;
