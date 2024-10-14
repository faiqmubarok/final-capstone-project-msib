import Accordion from "../../components/Accordion/Accordion";
import images from "../../images/images";

const HelpPage = () => {
  return (
    <>
      <div className=" bg-gradient-to-r from-orangeSecondary to-greenPrimary text-white text-center relative overflow-hidden w-full pt-24">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>

        <div className="max-w-screen-xl px-3 md:px-4 lg:px-8 flex gap-6 justify-between mx-auto items-center py-8">
          <h1 className="text-lg lg:text-3xl font-bold text-white text-start ">
            Halo Sobat Agri Butuh Bantuan?
          </h1>
          <img
            className="w-[150px] lg:w-[300px] opacity-95"
            src={images.helpIlustrator}
            alt=""
          />
        </div>

        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-10 rounded-full w-80 h-80"></div>
        <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 bg-white bg-opacity-10 rounded-full w-80 h-80"></div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-6 px-2.5 md:px-4 lg:px-8 py-12 max-w-screen-xl mx-auto">
        <section className="w-full lg:w-3/4 flex flex-col gap-12">
          <div className=" p-8 border">
            <h2 className="font-bold text-xl mb-5">Umum</h2>
            <Accordion
              title="Bagaimana PATANI dapat membantu petani?"
              content="PATANI menyediakan akses ke teknologi modern, pelatihan, dan pembiayaan yang memudahkan petani untuk meningkatkan hasil produksi dan pendapatan mereka."
            />
            <Accordion
              title="Bagaimana cara mendapatkan bantuan dari PATANI?"
              content="Anda bisa mendaftar di platform PATANI secara gratis, dan kami akan menghubungkan Anda dengan sumber daya dan pelatihan yang diperlukan untuk meningkatkan keterampilan serta produktivitas."
            />
            <Accordion
              title="Apa saja layanan yang disediakan PATANI?"
              content="PATANI menawarkan pelatihan pertanian modern, akses pembiayaan mikro, serta membantu menjual hasil panen melalui jaringan pasar yang lebih luas."
            />
          </div>
          <div className="p-8 border">
            <h2 className="font-bold text-xl mb-5">Nasabah</h2>
            <Accordion
              title="Bagaimana cara mendaftar sebagai nasabah PATANI?"
              content="Untuk menjadi nasabah, Anda hanya perlu mendaftar melalui platform PATANI dan mengikuti panduan yang disediakan. Prosesnya cepat dan mudah."
            />
            <Accordion
              title="Apa syarat untuk menjadi nasabah PATANI?"
              content="Anda harus merupakan petani, nelayan, atau pekerja agrikultur yang memerlukan dukungan teknologi, pembiayaan, atau pelatihan untuk meningkatkan hasil kerja."
            />
            <Accordion
              title="Berapa biaya yang diperlukan untuk menjadi nasabah?"
              content="Mendaftar di PATANI sepenuhnya gratis. Kami berkomitmen membantu Anda tanpa membebankan biaya pendaftaran."
            />
          </div>
          <div className="p-8 border">
            <h2 className="font-bold text-xl mb-5">Investor</h2>
            <Accordion
              title="Bagaimana cara berinvestasi di PATANI?"
              content="Anda dapat berinvestasi melalui platform PATANI dengan memilih program atau proyek yang ingin Anda dukung. Kami menyediakan berbagai pilihan investasi yang dapat membantu sektor agrikultur."
            />
            <Accordion
              title="Apa manfaat berinvestasi di PATANI?"
              content="Berinvestasi di PATANI memberikan Anda kesempatan untuk mendukung keberlanjutan sektor agrikultur di Indonesia, serta mendapatkan keuntungan dari hasil panen dan pengembangan teknologi pertanian."
            />
            <Accordion
              title="Apakah investasi di PATANI aman?"
              content="PATANI memberikan jaminan keamanan investasi dengan transparansi penuh, serta menghubungkan Anda dengan proyek-proyek agrikultur yang dikelola oleh para profesional."
            />
          </div>
        </section>
        <section className="w-full lg:w-1/4 text-sm border p-4 space-y-4 h-fit">
          <p className="mb-5">Tidak menemukan yang kamu cari?</p>
          <p>
            Hubungi tim <strong>Customer Service</strong> dan{" "}
            <strong>Penasihat Keuangan</strong> kami
          </p>
          <a
            href="mailto:emailanda@example.com"
            className="uppercase border-orangePrimary text-center block border w-full py-2 text-orangePrimary"
          >
            Email
          </a>
          <a
            href={
              "https://api.whatsapp.com/send/?phone=%2B6281225348357&text&type=phone_number&app_absent=0"
            }
            rel="noopener noreferrer"
            className="uppercase bg-orangePrimary block text-center text-white w-full py-2"
          >
            Chat
          </a>
        </section>
      </div>
    </>
  );
};

export default HelpPage;
