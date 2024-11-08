import CardDataStats from "../../components/Card/CardDataStats";
import { useEffect, useState } from "react";
import { GoProjectRoadmap } from "react-icons/go";
import { PiMoneyWavy } from "react-icons/pi";
import { MdAttachMoney } from "react-icons/md";
import { GrLineChart } from "react-icons/gr";
import TopProject from "../../components/Table/TopProject";
import PieChart from "../../components/Charts/PieChart";
import CardTemplate from "../../components/Card/CardTemplate";
import dataTransaction from "../../data/dummy-transaction.json";
import CardTransaction from "../../components/Card/CardTransaction";
import LineChart from "../../components/Charts/LineChart";

const DashboardPage = () => {
  const [transactions, setTransactions] = useState([]);

  const dataStats = {
    project: {
      total: 8,
    },
    portfolio: {
      total: 20517379,
      rate: "+4,42%",
    },
    modal: {
      total: 20000000,
      rate: "+4,42%",
    },
    profit: {
      total: 517379,
      rate: "+4,42%",
    },
  };

  useEffect(() => {
    setTransactions(dataTransaction.transaction);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 xl:gap-7">
        <CardDataStats total={dataStats.project.total.toString()} title="Proyek">
          <GoProjectRoadmap className="w-6 h-6 text-greenPrimary" />
        </CardDataStats>
        <CardDataStats
          total={`Rp. ${dataStats.portfolio.total.toLocaleString("id-ID")}`}
          title="Nilai Portofolio"
          levelUp={true}
          rate="+4,42%"
        >
          <PiMoneyWavy className="w-6 h-6 text-greenPrimary" />
        </CardDataStats>
        <CardDataStats
          total={`Rp. ${dataStats.modal.total.toLocaleString("id-ID")}`}
          title="Total Modal"
        >
          <MdAttachMoney className="w-6 h-6 text-greenPrimary" />
        </CardDataStats>
        <CardDataStats
          total={`Rp. ${dataStats.profit.total.toLocaleString("id-ID")}`}
          title="Keuntungan"
          levelDown
          rate="+4,42%"
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
            <PieChart />
          </CardTemplate>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 xl:mt-7 xl:gap-7">
        <div className="col-span-12 xl:col-span-5">
          <CardTemplate
            title={"Transaksi terbaru"}
            padding={"5"}
            titleClass={"text-xl font-semibold"}
            contentClass={"md:max-h-96 overflow-y-auto space-y-4 p-5"}
          >
            {transactions.slice(0, 5).map((transaction) => (
              <CardTransaction key={transaction.id} transaction={transaction} />
            ))}
          </CardTemplate>
        </div>
        <div className="col-span-12 xl:col-span-7">
          <div className="bg-white shadow-md rounded-sm p-2">
            <LineChart />
          </div>
        </div>
      </div>

    </>
  );
};

export default DashboardPage;
