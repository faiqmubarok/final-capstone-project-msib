import propTypes from "prop-types";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { useState } from "react";

const CardPortfolioStats = ({ dataStats }) => {
  const [isHide, setIsHide] = useState(true);

  return (
    <section className="bg-gradient-to-r from-orangeSecondary/85 to-greenPrimary/85 text-white px-6 py-10 rounded-lg shadow-lg relative overflow-hidden mb-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none"></div>

      {/* Konten Utama */}
      <div className="relative z-10 space-y-6 md:space-y-8">
        {/* Heading */}
        <div>
          <h3 className="text-xl font-semibold border-l-4 border-white pl-4">
            Nilai Portofolio
          </h3>
          <p className="text-sm text-white/80 pl-5 text-justify">
            Statistik terkini tentang total portofolio dan keuntungan kamu.
          </p>
        </div>

        {/* Data Utama */}
        <div className="grid grid-cols-2 gap-y-6 gap-x-4 items-center md:pl-4">
          {/* Total Portofolio */}
          <div className="col-span-2">
            <h4 className="text-sm uppercase font-medium text-white/70">
              Total Portofolio:
            </h4>
            <div className="flex items-center gap-5">
              <h2 className="text-2xl font-bold text-white">
                {isHide
                  ? "***********"
                  : new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(dataStats?.total_portfolio_value || 0)}
              </h2>
              <button type="button" onClick={() => setIsHide(!isHide)}>
                {isHide ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
              </button>
            </div>
          </div>

          {/* Keuntungan */}
          <div>
            <h4 className="text-sm uppercase font-medium text-white/70">
              Keuntungan:
            </h4>
            <h3 className="text-base font-semibold text-white">
              {isHide
                ? "***********"
                : new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  }).format(dataStats?.profit || 0)}
            </h3>
          </div>
          <div>
            <h4 className="text-sm uppercase font-medium text-white/70">
              Persentase:
            </h4>
            <span className="text-base font-semibold">
              {isHide
                ? "***********"
                : `${dataStats?.persentage_profit?.toFixed(2) || 0}%`}
            </span>
          </div>
        </div>
      </div>

      {/* Elemen Dekoratif */}
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white/20 rounded-full w-72 h-72"></div>
      <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 bg-white/10 rounded-full w-96 h-96"></div>
    </section>
  );
};

CardPortfolioStats.propTypes = {
  dataStats: propTypes.object,
};

export default CardPortfolioStats;
