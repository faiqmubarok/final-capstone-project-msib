import PageTitle from "../../components/PageTitle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../data/dummy-projects.json";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import images from "../../images/images";
import { IoMdTime } from "react-icons/io";
import { FaRegBuilding } from "react-icons/fa";

const DetailProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [investment, setInvestment] = useState(1000000); // Default investasi Rp 1 juta
  const [simulatedReturns, setSimulatedReturns] = useState({});

  useEffect(() => {
    const fetchProject = data.data.find(
      (project) => project.id === parseInt(id)
    );
    if (fetchProject) {
      setProject(fetchProject);
      calculateSimulation(fetchProject.profit); // Hitung simulasi langsung dengan nilai default
    }
  }, [id]);

  const calculateSimulation = (profitPercentage) => {
    const profitDecimal = parseFloat(profitPercentage) / 100;
    const returns = {
      "6 bulan": investment + investment * profitDecimal * 0.5,
      "1 tahun": investment + investment * profitDecimal,
      "3 tahun": investment + investment * profitDecimal * 3,
      "5 tahun": investment + investment * profitDecimal * 5,
    };
    setSimulatedReturns(returns);
  };

  const handleInvestmentChange = (e) => {
    setInvestment(parseInt(e.target.value));
    if (project) {
      calculateSimulation(project.profit);
    }
  };

  if (!project) {
    return <p className="text-center">Proyek tidak ditemukan</p>;
  }

  return (
    <>
      <PageTitle title={`${project?.name} | Patani`} />
      <Breadcrumbs
        pageName={project?.name}
        pageLink={[{ name: "Proyek", link: "/projects" }]}
        mainRoute={"/dashboard"}
      />
      {/* Project Image */}
      <div className="bg-white shadow-md rounded-sm border border-gray-100 overflow-hidden mb-8">
        <img
          src={images.agricultureHeroImage}
          alt={`Image of ${project.name}`}
          loading="lazy"
          className="w-full h-auto object-cover aspect-video"
        />
        <div className="p-6 flex justify-between items-center gap-4 flex-col md:flex-row">
          <span className="flex items-center">
            <FaRegBuilding className="w-6 h-6 mr-2 rounded-full" />
            <h2 className="text-2xl font-bold text-gray-800">{project.name}</h2>
          </span>
          <button className="bg-orangePrimary hover:bg-orangeSecondary text-white font-bold py-2 px-4 rounded-lg w-full md:w-fit shadow-lg border-2 border-orangeSecondary hover:border-orangePrimary">
            <span className="flex items-center justify-center">
              <IoMdTime className="w-5 h-5 mr-2" />
              Investasi Sekarang
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-8 text-sm">
        <section className="col-span-5 xl:col-span-3">
          {/* Tentang Proyek */}
          <div className="bg-white shadow-md rounded-sm border border-gray-100 mb-8">
            <div className="border-b border-gray-100 py-4 px-6">
              <h3 className="text-base font-semibold text-gray-800">
                Tentang Proyek
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-justify">
                Keuntungan berinvestasi di {project.name} mencakup potensi
                profit sebesar {project.profit} dan mendukung petani lokal dalam
                pengembangan {project.type}. Dana yang dibutuhkan sebesar{" "}
                {project.dana}.
              </p>
            </div>
          </div>
          {/* Detail Proyek */}
          <div className="bg-white shadow-md rounded-sm border border-gray-100 mb-8">
            <div className="border-b border-gray-100 py-4 px-6">
              <h3 className="text-base font-semibold text-gray-800">
                Detail Proyek
              </h3>
            </div>
            <ul className="space-y-2 p-6">
              <li>
                <strong>Tipe:</strong> {project.type}
              </li>
              <li>
                <strong>Lokasi:</strong> {project.location}
              </li>
              <li>
                <strong>Rata-rata keuntungan:</strong> {project.profit}
              </li>
              <li>
                <strong>Dana kelola:</strong> {project.dana}
              </li>
              <li>
                <strong>Status:</strong>{" "}
                <span className="text-yellow-500">Sedang berlangsung</span>
              </li>
              <li>
                <strong>Mulai Proyek:</strong> 27 Januari 2024
              </li>
              <li>
                <strong>Jatuh Tempo:</strong> 27 Januari 2025
              </li>
            </ul>
          </div>
          {/* Laporan Keuangan */}
          <div className="bg-white shadow-md rounded-sm border border-gray-100">
            <div className="border-b border-gray-100 py-4 px-6">
              <h3 className="text-base font-semibold text-gray-800">
                Laporan Keuangan
              </h3>
            </div>
            <div className="p-6">
              {[
                {
                  id: 1,
                  name: `Laporan ${project.name} 17 Januari 2022 - 17 Januari 2024`,
                  link: "/dummy-pdf.pdf",
                },
                {
                  id: 2,
                  name: `Laporan ${project.name} 1 Februari 2021 - 1 Februari 2023`,
                  link: "/dummy-pdf.pdf",
                },
                {
                  id: 3,
                  name: `Laporan ${project.name} 10 Maret 2020 - 10 Maret 2022`,
                  link: "/dummy-pdf.pdf",
                },
                {
                  id: 4,
                  name: `Laporan ${project.name} 5 April 2019 - 5 April 2021`,
                  link: "/dummy-pdf.pdf",
                },
                {
                  id: 5,
                  name: `Laporan ${project.name} 15 Mei 2018 - 15 Mei 2020`,
                  link: "/dummy-pdf.pdf",
                },
              ].map((laporan) => (
                <a
                  key={laporan.id}
                  href={laporan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-100 text-blue-600 font-semibold py-2 px-4 rounded-lg w-full text-left overflow-hidden whitespace-nowrap text-ellipsis hover:underline mb-2"
                >
                  {laporan.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="col-span-5 xl:col-span-2">
          <div className="bg-white shadow-md rounded-sm border border-gray-100">
            <div className="border-b border-gray-100 py-4 px-6">
              <h3 className="text-base font-semibold text-gray-800">
                Simulasi Investasi
              </h3>
            </div>
            <div className="p-6">
              <label className="block mb-2 text-gray-600">
                Jumlah Investasi (Rp):
              </label>
              <input
                type="number"
                value={investment}
                onChange={handleInvestmentChange}
                className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
              />

              {/* Mengatur grid responsif */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(simulatedReturns).map(([term, value]) => (
                  <div
                    key={term}
                    className="bg-gray-100 p-4 rounded-lg text-center"
                  >
                    <h3 className="text-lg font-semibold">{term}</h3>
                    <p className="text-xl font-bold">
                      Rp {value.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailProject;
