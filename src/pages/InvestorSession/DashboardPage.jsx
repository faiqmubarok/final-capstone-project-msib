import CardDataStats from "../../components/Card/CardDataStats";
import { GoProjectRoadmap } from "react-icons/go";
import { PiMoneyWavy } from "react-icons/pi";
import { MdAttachMoney } from "react-icons/md";
import { GrLineChart } from "react-icons/gr";
import TopProject from "../../components/Table/TopProject";

const DashboardPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 xl:gap-7">
        <CardDataStats total="8" title="Proyek" levelUp={true} rate="+4,42%">
          <GoProjectRoadmap className="w-6 h-6 text-greenPrimary" />
        </CardDataStats>
        <CardDataStats
          total="Rp 20.517.379"
          title="Nilai Portofolio"
          levelUp={true}
          rate="+4,42%"
        >
          <PiMoneyWavy className="w-6 h-6 text-greenPrimary" />
        </CardDataStats>
        <CardDataStats total="8" title="Total Modal" levelUp rate="+4,42%">
          <MdAttachMoney className="w-6 h-6 text-greenPrimary" />
        </CardDataStats>
        <CardDataStats total="8" title="Keuntungan" levelUp rate="+4,42%">
          <GrLineChart className="w-6 h-6 text-greenPrimary" />
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 xl:mt-7 xl:gap-7">
        <div className="col-span-12 xl:col-span-8">
          <TopProject />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
