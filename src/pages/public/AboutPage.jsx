import images from "../../images/images";

const AboutPage = () => {
  const contribute = [
    {
      image: images.homeLess,
      title: "Kemiskinan",
      description:
        "Meningkatkan pendapatan petani untuk mengatasi masalah kemiskinan.",
    },
    {
      image: images.hunger,
      title: "Tidak ada kelaparan",
      description:
        "Menaikkan produktivitas pertanian untuk mencukupi kebutuhan pangan Indonesia dan dunia.",
    },
    {
      image: images.welfare,
      title: "Peningkatan Kesejahteraan",
      description:
        "Menciptakan peluang kerja di sektor pertanian, perikanan, dan peternakan di daerah terpencil.",
    },
  ];

  return (
    <>
      <div className=" flex items-center justify-center mt-48">
        <div className="absolute top-[98px] h-56 inset-0 bg-black opacity-50 z-0"></div>
        <img
          loading="lazy"
          src={images.riceField}
          className="w-screen h-56 absolute left-0 object-cover object-center -z-10 shadow-md"
          alt="riceField"
        />
        <h1 className="text-3xl font-bold z-10 text-white">Tentang Kami</h1>
      </div>

      {/* Tentang */}
      <section className="mt-32 text-sm text-justify space-y-4 max-w-screen-md mx-auto leading-6 mb-5 px-2.5">
        <p>
          Indonesia, dikenal juga sebagai &quot;Zamrud Khatulistiwa,&quot;
          memiliki potensi agrikultur yang luar biasa. Namun, sektor ini masih
          dibelenggu oleh pelbagai masalah. Akibatnya, pekerja agrikultur
          seperti petani, nelayan, dan peternak menerima belum merata sejahtera
          dan Indonesia masih ketergantungan impor bahan pangan. Padahal, di
          situasi global kedepannya, ketahanan pangan adalah kunci untuk
          keutuhan bangsa dan negara.
        </p>
        <p>
          Bersama PATANI, kita bisa menciptakan perubahan yang lebih besar bagi
          seluruh pekerja sektor agrikultur di Indonesia. Kami percaya bahwa
          dengan memberikan kesempatan bagi mereka untuk mengembangkan bisnis
          dan inovasi, kita dapat memperkuat sektor ini sambil memupuk
          kepercayaan masyarakat. Lebih dari itu, PATANI berkomitmen untuk
          mewujudkan pertumbuhan ekonomi yang inklusif dan berkelanjutan,
          sejalan dengan pencapaian Tujuan Pembangunan Berkelanjutan (SDGs).
          Mari bersama-sama menumbuhkan masa depan yang berkelanjutan, demi
          segalanya yang indah di dunia ini.
        </p>
        <h2 className="text-center text-base py-2">
          - <strong>Pesan dari Tim PATANI</strong> -
        </h2>
      </section>

      {/* Visi & Misi */}
      <section className="w-full py-12 max-w-screen-xl px-2.5 md:px-4 lg:px-8 mx-auto flex flex-col text-sm relative">
        {/* Dekorasi bubble di seluruh background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {/* Bubble besar */}
          <div className="absolute top-1/4 right-0 w-40 h-40 bg-orangePrimary opacity-20 rounded-full"></div>
          <div className="absolute top-1/3 left-0 w-32 h-32 bg-orangeSecondary opacity-20 rounded-full"></div>

          {/* Bubble kecil */}
          <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-orangePrimary opacity-10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-orangeSecondary opacity-10 rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 w-24 h-24 bg-orangePrimary opacity-10 rounded-full"></div>
        </div>

        {/* Visi */}
        <div className="mb-10 p-8 bg-white shadow-lg rounded-lg text-left self-start ml-0 md:mr-auto border-l-4 max-w-screen-md border-[#e26b13] relative z-10">
          <h2 className="text-4xl font-semibold mb-4 text-[#e26b13]">Visi</h2>
          <p className="text-gray-600 leading-relaxed">
            Mewujudkan ekosistem agrikultur Indonesia yang inklusif, mandiri,
            dan berkelanjutan.
          </p>
        </div>

        {/* Misi */}
        <div className="p-8 bg-white shadow-lg rounded-lg text-left self-end mr-0 md:ml-auto border-r-4 max-w-screen-md border-[#e26b13] relative z-10">
          <h2 className="text-4xl font-semibold mb-6 text-[#e26b13]">Misi</h2>
          <ul className="text-gray-600 space-y-4 leading-relaxed">
            <li>
              Meningkatkan kesejahteraan pekerja agrikultur melalui akses
              teknologi, pembiayaan, dan pasar.
            </li>
            <li>
              Mendorong inovasi dan pertumbuhan bisnis yang berkelanjutan di
              sektor agrikultur.
            </li>
            <li>
              Memperkuat kolaborasi untuk menciptakan ketahanan pangan nasional
              dan mengurangi ketergantungan impor.
            </li>
            <li>
              Membangun kepercayaan masyarakat terhadap sektor agrikultur dengan
              transparansi dan keberlanjutan.
            </li>
          </ul>
        </div>
      </section>

      {/* Contribute */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2.5 md:px-4 lg:px-8 max-w-screen-xl mx-auto mb-24 py-16">
        <h1 className="col-span-1 md:col-span-2 lg:col-span-3 text-center text-xl font-bold mb-3">
          Dalam Mendukung Pencapaian Tujuan Pembangunan Berkelanjutan
        </h1>
        {contribute.map((item, index) => (
          <div
            key={index}
            className="flex items-center flex-col justify-center w-full rounded-lg overflow-hidden shadow-lg"
          >
            <img
              loading="lazy"
              src={item.image}
              className="w-full object-cover object-center h-52"
              alt={item.title}
            />
            <div className="py-4 px-3 bg-gray-50 text-sm">
              <h3 className="font-bold text-base">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default AboutPage;
