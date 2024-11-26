import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CardTemplate from "../../components/Card/CardTemplate";
import LineChart from "../../components/Charts/LineChart";
import useFetchDataStats from "../../hooks/useFetchDataStats";
import PieChart from "../../components/Charts/PieChart";

const Portfolio = () => {
  const userId = JSON.parse(sessionStorage.getItem("authToken")).user.id;
  const { dataStats } = useFetchDataStats({ userId });
  return (
    <>
      <Breadcrumbs pageName="Portfolio" mainRoute={"/dashboard"} />
      <div className="grid grid-cols-12 gap-4 md:gap-6 xl:gap-7 mb-4">
        <div className="col-span-12 xl:col-span-7">
          <div className="bg-white shadow-md rounded-sm p-2 lg:h-[450px]">
            {dataStats === null ? (
              <div className="w-full text-center text-gray-500">Memuat...</div>
            ) : (
              <LineChart data={dataStats?.investment_chart_data} />
            )}
          </div>
        </div>
        <div className="col-span-12 xl:col-span-5">
          <CardTemplate
            title={"Distribusi Portofolio"}
            padding={"5"}
            contentClass={"p-5"}
            titleClass={"text-xl font-semibold"}
            containerClass={"h-[450px]"}
          >
            {dataStats === null ? (
              <div className="w-full text-center text-gray-500">Memuat...</div>
            ) : (
              <PieChart dataDistribution={dataStats?.portfolio_distribution} />
            )}
          </CardTemplate>
        </div>
      </div>
      <section className="bg-gradient-to-r from-orangeSecondary/85 to-greenPrimary/85 text-white p-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>

        <div className="relative z-10">
          <h3 className="text-lg font-semibold border-l-4 border-white pl-4">
            Nilai Portofolio
          </h3>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-10 rounded-full w-80 h-80"></div>
        <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 bg-white bg-opacity-10 rounded-full w-80 h-80"></div>
      </section>
    </>
  );
};

export default Portfolio;
