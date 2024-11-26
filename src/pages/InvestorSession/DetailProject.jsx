import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAlert } from "../../context/AlertContext";
import PageTitle from "../../components/PageTitle";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Modal from "../../components/Modal/Modal";
import CardTemplate from "../../components/Card/CardTemplate";
import CardDataStats from "../../components/Card/CardDataStats";
import FormTopup from "../../components/Form/FormTopup";
import { IoMdTime, IoIosTimer } from "react-icons/io";
import { FaRegBuilding } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { PiTarget, PiMoneyWavy } from "react-icons/pi";

const DetailProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { showAlert } = useAlert();
  const [investmentData, setInvestmentData] = useState({
    investment: 10000000,
    profits: [],
    simulatedReturns: {},
  });
  const terms = [1, 3, 5, 10];

  useEffect(() => {
    const fetchDetailProject = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/projects/project/${id}/`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProject(data);
        setInvestmentData((prev) => ({
          ...prev,
          profits: data.financial_reports.map((report) =>
            report.profit ? parseInt(report.profit, 10) : 1
          ),
        }));
      } catch (error) {
        showAlert("error", "Proyek tidak ditemukan");
        console.error("Error fetching project details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetailProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    const { investment, profits } = investmentData;
    if (investment === 0 || profits.length === 0) return;
    // Hitung rata-rata profit
    const averageProfit =
      profits.reduce((sum, profit) => sum + profit, 0) / profits.length;
    // Hitung simulasi berdasarkan rata-rata keuntungan
    const simulatedReturns = terms.reduce((acc, term) => {
      acc[`${term} Tahun`] =
        investment * Math.pow(1 + averageProfit / 100, term);
      return acc;
    }, {});

    setInvestmentData((prev) => ({
      ...prev,
      simulatedReturns,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [investmentData.investment, investmentData.profits]);

  const handleInvestmentChange = (e) => {
    const value = e.target.value.replace(/\./g, "");
    if (!isNaN(value)) {
      setInvestmentData((prev) => ({
        ...prev,
        investment: Number(value),
      }));
    }
  };

  return (
    <>
      {loading && <p className="text-center font-medium">Memuat...</p>}
      {!loading && project && (
        <>
          <PageTitle title={`${project?.project.name} | Patani`} />
          <Breadcrumbs
            pageName={project?.project.name}
            pageLink={[{ name: "Proyek", link: "/projects" }]}
            mainRoute={"/dashboard"}
          />
          {/* Project Image */}
          <div className="bg-white shadow-md rounded-sm border border-gray-100 overflow-hidden mb-8">
            {project?.project?.projectImage ? (
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}${
                  project.project.projectImage
                }`}
                alt={`Image of ${project?.project?.name}`}
                loading="lazy"
                className="w-full h-auto object-cover aspect-video"
              />
            ) : (
              <div className="text-gray-500 text-center min-h-64 md:min-h-72 lg:min-h-96  flex justify-center items-center border-b">
                Gambar tidak tersedia
              </div>
            )}
            <div className="p-6 flex justify-between items-center gap-4 flex-col md:flex-row">
              <span className="flex items-center">
                {project?.project.logo ? (
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}${
                      project?.project.logo
                    }`}
                    alt="logo"
                    className="w-7 h-7 mr-2 rounded-full object-cover text-[10px] border shadow-md overflow-hidden shrink-0"
                  />
                ) : (
                  <FaRegBuilding className="w-7 h-7 mr-2 rounded-full shadow-md" />
                )}
                <h2 className="text-2xl font-bold text-gray-800">
                  {project?.project.name}
                </h2>
              </span>
              <button
                onClick={() => setIsModalOpen(true)}
                disabled={project?.project.status_display !== "Tersedia"}
                className={`bg-orangePrimary hover:bg-orangeSecondary text-white font-bold py-2 px-4 rounded-lg w-full md:w-fit shadow-lg border-2 border-orangeSecondary hover:border-orangePrimary disabled:cursor-not-allowed disabled:bg-gray-500 disabled:border-gray-500`}
              >
                <span className="flex items-center justify-center">
                  <IoMdTime className="w-5 h-5 mr-2" />
                  Investasi Sekarang
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-8 text-sm">
            <section className="col-span-5 xl:col-span-3">
              {/* Informasi Umum */}
              <div className="grid grid-cols-2 gap-4 lg:gap-8 mb-8">
                <CardDataStats
                  total={"Status"}
                  title={project?.project.status_display}
                >
                  <IoIosTimer className="w-6 h-6 text-greenPrimary" />
                </CardDataStats>
                <CardDataStats
                  total={"Lokasi"}
                  title={project?.project.location}
                >
                  <IoLocationOutline className="w-6 h-6 text-greenPrimary" />
                </CardDataStats>
                <CardDataStats
                  total={"Target Dana"}
                  title={
                    project?.project?.target_funds
                      ? parseInt(
                          project.project.target_funds.toString().split(".")[0],
                          10
                        ).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                        })
                      : "Rp 0"
                  }
                >
                  <PiTarget className="w-6 h-6 text-greenPrimary" />
                </CardDataStats>
                <CardDataStats
                  total={"Dana Kelola"}
                  title={
                    project?.project?.invested_amount
                      ? parseInt(
                          project.project.invested_amount.toString().split(".")[0],
                          10
                        ).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                        })
                      : "Rp 0"
                  }
                >
                  <PiMoneyWavy className="w-6 h-6 text-greenPrimary" />
                </CardDataStats>
              </div>
              {/* Tentang Proyek */}
              <CardTemplate
                containerClass={"mb-8"}
                title={"Tentang Proyek"}
                titleClass={"text-base font-semibold"}
                padding={"6"}
                contentClass={"p-6 text-justify text-gray-600 text-sm"}
              >
                {project?.project.description}
              </CardTemplate>
              {/* Detail Proyek */}
              <CardTemplate
                title={"Detail Proyek"}
                titleClass={"text-base font-semibold"}
                padding={"6"}
                contentClass={"p-6 text-justify text-gray-600 text-sm"}
              >
                <ul className="space-y-2 mb-4">
                  <li>
                    <span className="font-bold">Tipe:</span>{" "}
                    {project.project.type_display}
                  </li>
                  <li>
                    <span className="font-bold">Rata-rata keuntungan:</span>{" "}
                    {project.project.profit}% / Tahun
                  </li>
                  <li>
                    <span className="font-bold">Mulai proyek:</span>{" "}
                    {project.project.start_date || "-"}
                  </li>
                  <li>
                    <span className="font-bold">Proyek selesai:</span>{" "}
                    {project.project.end_date || "-"}
                  </li>
                </ul>
                <div className="flex gap-4 items-center pt-4 border-t">
                  <img
                    className="w-10 h-10 rounded-full text-[8px] leading-3 shadow-md"
                    src={`${import.meta.env.VITE_BACKEND_URL}${
                      project?.farmer.photoProfile
                    }`}
                    alt="Profil Pengelola"
                  />
                  <span className="text-sm">
                    <span className="font-semibold">Pengelola:</span>
                    <p>{project?.farmer.name}</p>
                  </span>
                </div>
              </CardTemplate>
            </section>

            <section className="col-span-5 xl:col-span-2">
              {/* Laporan Keuangan */}
              <CardTemplate
                containerClass={"mb-8"}
                title={"Laporan Keuangan"}
                titleClass={"text-base font-semibold"}
                padding={"6"}
                contentClass={"p-6 text-justify text-gray-600 text-sm"}
              >
                {project?.financial_reports.length === 0 && (
                  <p className="text-gray-600 text-center">
                    Belum ada laporan keuangan
                  </p>
                )}
                {project?.financial_reports.slice(0, 5).map((report) => (
                  <a
                    key={report.id}
                    href={`${import.meta.env.VITE_BACKEND_URL}${
                      report.file_url
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-100 text-blue-600 font-semibold py-2 px-4 rounded-lg w-full text-left overflow-hidden whitespace-nowrap text-ellipsis hover:underline mb-2"
                  >
                    {report.file_name}
                  </a>
                ))}
              </CardTemplate>
              {/* Simulasi Investasi */}
              <CardTemplate
                containerClass={"mb-8"}
                title={"Simulasi Investasi"}
                titleClass={"text-base font-semibold"}
                padding={"6"}
                contentClass={"p-6 text-justify text-gray-600 text-sm"}
              >
                <label
                  htmlFor="simulation"
                  className="block mb-2 text-gray-600"
                >
                  Jumlah Investasi (Rp):
                </label>
                <input
                  id="simulation"
                  name="simulation"
                  type="text"
                  inputMode="numeric"
                  value={investmentData.investment.toLocaleString("id-ID")}
                  onChange={handleInvestmentChange}
                  className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                />

                {Object.entries(investmentData.simulatedReturns).length > 0 && (
                  <p className="mb-4">
                    Perkiraan nilai investasi anda setelah beberapa tahun:
                  </p>
                )}

                <div className="flex flex-col gap-4">
                  {Object.entries(investmentData.simulatedReturns).map(
                    ([term, value]) => (
                      <div
                        key={term}
                        className="bg-gray-100 p-4 rounded-lg text-start grid grid-cols-2 gap-4 "
                      >
                        <h3 className="">{term} : </h3>
                        <p className="font-semibold text-end">
                          Rp{" "}
                          {value.toLocaleString("id-ID", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </CardTemplate>
            </section>
          </div>

          {isModalOpen && (
            <Modal onClose={() => setIsModalOpen(false)}>
              <Modal.Header
                title="Setor Dana"
                onClose={() => setIsModalOpen(false)}
              />
              <FormTopup setIsModalOpen={setIsModalOpen} />
            </Modal>
          )}
        </>
      )}
    </>
  );
};

export default DetailProject;
