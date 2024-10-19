import {
  FaSeedling,
  FaChartLine,
  FaShieldAlt,
  FaRegMoneyBillAlt,
  FaUserCheck,
  FaHandsHelping,
} from "react-icons/fa";
import agricultureHeroImage from "../../images/agricultureHeroImage.jpg";
import images from "../../images/images";
import { Link } from "react-router-dom";
import CardPublic from "../../components/Card/CardPublic";
import CardTestimony from "../../components/Card/CardTestimony";

const HomePage = () => {
  return (
    <>
      {/* Jumbotron */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${agricultureHeroImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000] opacity-50"></div>
        <article className="relative text-center text-white z-10 max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Berikan Dampak Positif dengan Investasi Anda
          </h1>
          <p className="text-base md:text-lg mb-8">
            Dukung petani, peternak, dan nelayan dengan investasi yang
            menghasilkan keuntungan bagi Anda dan mereka.
          </p>
          <Link
            to="/register"
            className="bg-orangePrimary text-white font-bold py-3 px-8 rounded-full hover:bg-orangeSecondary transition-all duration-300"
          >
            Mulai Investasi Sekarang
          </Link>
        </article>
      </section>

      {/* Keuntungan Bagi Investor */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Keuntungan Berinvestasi di Platform Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-3 lg:gap-10 max-w-screen-xl mx-auto text-sm px-2.5 md:px-4 lg:px-8">
          <CardPublic
            icon={
              <FaChartLine
                size={40}
                className="text-greenPrimary mb-6 mx-auto"
              />
            }
            title="Keuntungan Stabil"
            article="Dapatkan imbal yang hingga 12% per tahun dari proyek investasi yang terverifikasi."
          />
          <CardPublic
            icon={
              <FaShieldAlt
                size={40}
                className="text-greenPrimary mb-6 mx-auto"
              />
            }
            title={"Aman dan Terpercaya"}
            article={
              "Proyek yang dipilih melalui proses seleksi ketat untuk menjaga keamanan investasi Anda."
            }
          />
          <CardPublic
            icon={
              <FaSeedling
                size={40}
                className="text-greenPrimary mb-6 mx-auto"
              />
            }
            title="Berdampak Sosial"
            article="Investasi Anda turut membantu meningkatkan kesejahteraan petani, peternak, dan nelayan."
          />
        </div>
      </section>

      {/* Cara Menjadi Investor */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Cara Menjadi Investor
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-3 lg:gap-10 max-w-screen-xl mx-auto text-sm px-2.5 md:px-4 lg:px-8">
          <CardPublic
            icon={
              <FaUserCheck size={40} className="text-green-600 mb-6 mx-auto" />
            }
            title="1. Daftar Akun"
            article="Buat akun di platform kami dengan mengisi formulir pendaftaran. Proses cepat dan aman."
            backgroundColor={"bg-gray-50"}
          />
          <CardPublic
            icon={
              <FaRegMoneyBillAlt
                size={40}
                className="text-green-600 mb-6 mx-auto"
              />
            }
            title={"2. Pilih Proyek"}
            article={
              "Pilih proyek investasi yang sesuai dengan preferensi Anda. Tersedia berbagai sektor yang bisa Anda dukung."
            }
            backgroundColor={"bg-gray-50"}
          />
          <CardPublic
            icon={
              <FaHandsHelping
                size={40}
                className="text-green-600 mb-6 mx-auto"
              />
            }
            title={"3. Salurkan Dana"}
            article={
              "Lakukan investasi pada proyek yang Anda pilih dan mulai dapatkan keuntungan sambil membantu komunitas lokal."
            }
          />
        </div>
      </section>

      {/* Proyek Terbaru */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Proyek Investasi Terbaik
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-3 lg:gap-10 max-w-screen-xl mx-auto text-sm px-2.5 md:px-4 lg:px-8">
          <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden">
            <img
              src={images.agriculture}
              alt="Tanaman Padi"
              loading="lazy"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Proyek Tanaman Padi</h3>
              <p className="text-gray-600 mb-4">Lokasi: Purwokerto</p>
              <p className="font-bold text-orangePrimary mb-2">
                Keuntungan: 10% per tahun
              </p>
            </div>
          </div>

          <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden">
            <img
              src={images.cattleFarm}
              loading="lazy"
              alt="Peternakan Sapi"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Proyek Peternakan Sapi</h3>
              <p className="text-gray-600 mb-4">Lokasi: Jawa Barat</p>
              <p className="font-bold text-orangePrimary mb-2">
                Keuntungan: 12% per tahun
              </p>
            </div>
          </div>

          <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden">
            <img
              src={images.marineFisheries}
              loading="lazy"
              alt="Perikanan Laut"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Proyek Perikanan Laut</h3>
              <p className="text-gray-600 mb-4">Lokasi: Sulawesi</p>
              <p className="font-bold text-orangePrimary mb-2">
                Keuntungan: 11% per tahun
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-14">
          Testimoni Investor
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-3 lg:gap-10 max-w-screen-xl mx-auto text-sm px-2.5 md:px-4 lg:px-8">
          <CardTestimony
            image={"https://randomuser.me/api/portraits/men/45.jpg"}
            writer="Andi"
            title="Investor"
            comment="Investasi di platform ini sangat menguntungkan. Saya dapat mendukung sektor pertanian dan peternakan, dan hasilnya sangat memuaskan!"
            partisipant={"Investor"}
          />
          <CardTestimony
            image={"https://randomuser.me/api/portraits/men/67.jpg"}
            writer="Budi"
            title="Investor"
            comment="Saya sangat senang dengan platform ini. Saya dapat mendukung sektor pertanian dan peternakan, dan keuntungannya sangat menarik!"
            partisipant={"Investor"}
          />
          <CardTestimony
            image={"https://randomuser.me/api/portraits/women/63.jpg"}
            writer="Mutiara"
            title="Investor"
            comment="Saya senang berinvestasi di sektor pertanian melalui platform ini. Prosesnya mudah dan saya mendapatkan keuntungan yang baik!"
            partisipant={"Investor"}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orangeSecondary to-greenPrimary text-white py-20 text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Mulai Investasi Anda Sekarang
          </h2>
          <p className=" text-base mb-8 max-w-2xl mx-auto">
            Berinvestasi di sektor pertanian, peternakan, dan perikanan untuk
            masa depan yang lebih baik. Dapatkan keuntungan dan dukung
            kesejahteraan masyarakat.
          </p>
          <Link
            to={"/register"}
            className="bg-orangePrimary text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-orange-500 hover:scale-105 transition-transform duration-300"
          >
            Daftar Sekarang
          </Link>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-10 rounded-full w-80 h-80"></div>
        <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 bg-white bg-opacity-10 rounded-full w-80 h-80"></div>
      </section>
    </>
  );
};

export default HomePage;
