import propTypes from "prop-types";
import { FaRegBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";

const PortfolioList = ({ item, setIsModalOpen, setSelectedPortfolio }) => {
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
      .format(new Date(date))
      .replace(/\//g, "-");
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <tr className="bg-white border-b border-gray-100">
      <td className="px-6 py-4 font-medium whitespace-nowrap flex items-center">
        <Link to={`/project/${item?.project.id}`} className="flex items-center">
          {item?.project.logo ? (
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}${item?.project.logo}`}
              alt="logo"
              className="w-6 h-6 mr-2 rounded-full object-cover text-[10px] shadow-md overflow-hidden shrink-0"
            />
          ) : (
            <FaRegBuilding className="w-6 h-6 mr-2 rounded-full shadow-md" />
          )}
          <span className="truncate max-w-[150px]" title={item.name}>
            {item.project.name}
          </span>
        </Link>
      </td>
      <td className="px-6 py-4">{formatCurrency(item?.invested_amount)}</td>
      <td className="px-6 py-4">{formatCurrency(item?.profit.net_profit)}</td>
      <td className="px-6 py-4">{formatDate(item?.project.start_date)}</td>
      <td className="px-6 py-4">{formatDate(item?.project.end_date)}</td>
      <td className="px-4 py-2">
        <span
          className={`truncate text-white rounded-full px-2 py-1 text-xs ${
            item?.project.status_display === "Tersedia"
              ? "bg-green-600"
              : item.status === "Tidak tersedia"
              ? "bg-red-600"
              : "bg-yellow-600"
          } max-w-20 inline-block`}
        >
          {item?.project.status_display}
        </span>
      </td>
      <td className="px-6 py-4">
        <button
          disabled={item?.project.status_display === "Sedang berlangsung"}
          type="button"
          onClick={() => {
            setIsModalOpen(true);
            setSelectedPortfolio(item);
          }}
          className="text-white rounded-lg px-3 py-2 text-xs font-semibold hover:bg-greenPrimary bg-greenSecondary text-nowrap disabled:cursor-not-allowed disabled:bg-gray-500 disabled:opacity-40"
        >
          Tarik Dana
        </button>
      </td>
    </tr>
  );
};

PortfolioList.propTypes = {
  item: propTypes.object,
  setIsModalOpen: propTypes.func,
  setSelectedPortfolio: propTypes.func,
};

export default PortfolioList;
