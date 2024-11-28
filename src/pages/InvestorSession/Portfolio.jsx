import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CardTemplate from "../../components/Card/CardTemplate";
import LineChart from "../../components/Charts/LineChart";
import useFetchDataStats from "../../hooks/useFetchDataStats";
import PieChart from "../../components/Charts/PieChart";
import TableContainer from "../../components/Table/TableContainer";
import CardPortfolioStats from "../../components/Card/CardPortfolioStats";
import PortfolioList from "../../components/Table/PortfolioList";
import Modal from "../../components/Modal/Modal";
import { useState, useEffect } from "react";
import FormWithdraw from "../../components/Form/FormWithdraw";
import axios from "axios";

const Portfolio = () => {
  const userId = JSON.parse(sessionStorage.getItem("authToken")).user.id;
  const { dataStats } = useFetchDataStats({ userId });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [portfolio, setPortfolio] = useState([]);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  const fetchPortfolio = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/portfolio/getPortfolio/${userId}/`
      );
      const data = response.data;

      if (Array.isArray(data.data)) {
        setPortfolio(data.data);
      } else {
        setPortfolio([]);
      }
    } catch (error) {
      console.error(
        "Terjadi kesalahan saat mengambil data portfolio:",
        error
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (userId) {
      fetchPortfolio();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <>
      <Breadcrumbs pageName="Portfolio" mainRoute={"/dashboard"} />
      <CardPortfolioStats dataStats={dataStats} />

      <section className="grid grid-cols-12 gap-4 md:gap-6 xl:gap-7 mb-4 md:mb-6 xl:mb-7">
        <div className="col-span-12 xl:col-span-7 order-2">
          <div className="bg-white shadow-md rounded-sm p-2 lg:max-h-[440px]">
            {dataStats === null ? (
              <div className="w-full text-center text-gray-500">Memuat...</div>
            ) : (
              <LineChart data={dataStats?.investment_chart_data} />
            )}
          </div>
        </div>
        <div className="col-span-12 xl:col-span-5 order-1">
          <CardTemplate
            title={"Distribusi Portofolio"}
            padding={"5"}
            contentClass={"p-5"}
            titleClass={"text-xl font-semibold"}
            containerClass={"h-full"}
          >
            {dataStats === null ? (
              <div className="w-full text-center text-gray-500">Memuat...</div>
            ) : (
              <PieChart dataDistribution={dataStats?.portfolio_distribution} />
            )}
          </CardTemplate>
        </div>
      </section>

      <section className="bg-white shadow-md rounded-sm border border-gray-100 flex flex-col gap-6 p-4">
        <h2 className="text-lg font-semibold text-black">Portofolio kamu</h2>
        <TableContainer
          columns={[
            "Nama Proyek",
            "Portfolio",
            "Keuntungan",
            "Mulai Proyek",
            "Proyek Berakhir",
            "Status",
            "Aksi",
          ]}
          loading={loading}
        >
          {portfolio.map((item, index) => (
            <PortfolioList
              key={index}
              item={item}
              setIsModalOpen={setIsModalOpen}
              setSelectedPortfolio={setSelectedPortfolio}
            />
          ))}
        </TableContainer>
      </section>

      {isModalOpen && (
        <Modal
          onClose={() => {
            setSelectedPortfolio(null);
            setIsModalOpen(false);
          }}
        >
          <Modal.Header
            title="Tarik Dana"
            onClose={() => {
              setSelectedPortfolio(null);
              setIsModalOpen(false);
            }}
          />
          <FormWithdraw
            portfolio={selectedPortfolio}
            setIsModalOpen={setIsModalOpen}
            fetchPortfolio={fetchPortfolio}
          />
        </Modal>
      )}
    </>
  );
};

export default Portfolio;
