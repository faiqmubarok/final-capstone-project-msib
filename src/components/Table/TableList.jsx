import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FaRegBuilding } from "react-icons/fa";

const TableList = ({ item }) => {
  const navigate = useNavigate();

  // Fungsi untuk mengonversi dana ke format singkat
  const formatDana = (dana) => {
    const amount = parseInt(dana.split(/[.,]/)[0], 10); // Mengambil bagian sebelum titik atau koma

    if (amount >= 1000000000) {
      // Jika dana lebih dari atau sama dengan 1 miliar
      return `${(amount / 1000000000).toFixed(1)} M`;
    } else if (amount >= 1000000) {
      // Jika dana lebih dari atau sama dengan 1 juta
      return `${(amount / 1000000).toFixed(1)} Jt`;
    } else {
      // Jika dana kurang dari 1 juta
      return `${amount.toLocaleString()}`;
    }
  };

  return (
    <tr
      className="bg-white border-b border-gray-100 cursor-pointer hover:bg-gray-50"
      onClick={() => navigate(`/project/${item.id}`)}
    >
      <td className="px-6 py-4 font-medium whitespace-nowrap flex items-center">
        {item.logo ? (
          <img
            src={item.logo}
            alt="logo"
            className="w-6 h-6 mr-2 rounded-full object-cover text-[10px] shadow-md overflow-hidden shrink-0"
          />
        ) : (
          <FaRegBuilding className="w-6 h-6 mr-2 rounded-full shadow-md" />
        )}
        {item.name}
      </td>
      <td className="px-6 py-4">{item.type_display}</td>
      <td className="px-6 py-4">{item.location}</td>
      <td className="px-6 py-4">{formatDana(item.invested_amount)}</td>
      <td className="px-6 py-4">{item.profit}%</td>
      <td className="px-4 py-2">
        <span
          className={`text-white rounded-full px-2 py-1 text-xs text-nowrap ${
            item.status_display === "Tersedia"
              ? "bg-green-600"
              : item.status_display === "Tidak tersedia"
              ? "bg-red-600"
              : "bg-yellow-600"
          }`}
        >
          {item.status_display}
        </span>
      </td>
    </tr>
  );
};

TableList.propTypes = {
  item: propTypes.object.isRequired,
};

export default TableList;
