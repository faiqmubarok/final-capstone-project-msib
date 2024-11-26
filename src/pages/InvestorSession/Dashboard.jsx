import CardDataStats from "../../components/Card/CardDataStats";
import { GoProjectRoadmap } from "react-icons/go";
import { PiMoneyWavy } from "react-icons/pi";
import { MdAttachMoney } from "react-icons/md";
import { GrLineChart } from "react-icons/gr";
import TopProject from "../../components/Table/TopProject";
import PieChart from "../../components/Charts/PieChart";
import CardTemplate from "../../components/Card/CardTemplate";
import CardTransaction from "../../components/Card/CardTransaction";
import LineChart from "../../components/Charts/LineChart";
import useFetchTransaction from "../../hooks/useFetchTransaction";
import useFetchDataStats from "../../hooks/useFetchDataStats";

const DashboardPage = () => {
  const userId = JSON.parse(sessionStorage.getItem("authToken")).user.id;
  const { dataStats } = useFetchDataStats({ userId });
  const { transactions, loading } = useFetchTransaction({ userId });

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 xl:gap-7">
        <CardDataStats
          total={dataStats?.project_count.toString()}
          title="Proyek"
        >
          <GoProjectRoadmap className="w-6 h-6 text-greenPrimary" />
        </CardDataStats>
        <CardDataStats
          total={`Rp. ${dataStats?.total_portfolio_value.toLocaleString(
            "id-ID"
          )}`}
          title="Nilai Portofolio"
        >
          <PiMoneyWavy className="w-6 h-6 text-greenPrimary" />
        </CardDataStats>
        <CardDataStats
          total={`Rp. ${dataStats?.total_modal.toLocaleString("id-ID")}`}
          title="Total Modal"
        >
          <MdAttachMoney className="w-6 h-6 text-greenPrimary" />
        </CardDataStats>
        <CardDataStats
          total={`Rp. ${dataStats?.profit.toLocaleString("id-ID")}`}
          title="Keuntungan"
          levelUp={dataStats?.persentage_profit >= 0 === true}
          levelDown={dataStats?.persentage_profit < 0 === true}
          rate={`${dataStats?.persentage_profit.toFixed(2)}%`}
        >
          <GrLineChart className="w-6 h-6 text-greenPrimary" />
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 xl:mt-7 xl:gap-7">
        <div className="col-span-12 xl:col-span-7">
          <TopProject />
        </div>
        <div className="col-span-12 xl:col-span-5">
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
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 xl:mt-7 xl:gap-7">
        <div className="col-span-12 xl:col-span-5">
          <CardTemplate
            title={"Transaksi terbaru"}
            padding={"5"}
            titleClass={"text-xl font-semibold"}
            contentClass={
              "md:h-[370px] overflow-y-auto space-y-4 p-5 no-scrollbar"
            }
          >
            {loading && (
              <div className="w-full text-center text-gray-500">Memuat...</div>
            )}
            {!loading && transactions.length === 0 ? (
              <div className="w-full text-center text-gray-500">
                Tidak ada data Transaksi.
              </div>
            ) : (
              <>
                {transactions.slice(0, 5).map((transaction) => (
                  <CardTransaction
                    key={transaction.id}
                    transaction={transaction}
                  />
                ))}
              </>
            )}
          </CardTemplate>
        </div>
        <div className="col-span-12 xl:col-span-7">
          <div className="bg-white shadow-md rounded-sm p-2">
            {dataStats === null ? (
              <div className="w-full text-center text-gray-500">Memuat...</div>
            ) : (
              <LineChart data={dataStats?.investment_chart_data} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
