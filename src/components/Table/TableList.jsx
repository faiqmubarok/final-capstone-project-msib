import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FaRegBuilding } from "react-icons/fa";


// Fungsi untuk mengonversi dana ke format singkat
const formatDana = (dana) => {
  const amount = parseInt(dana.replace(/[^0-9]/g, '')); // Menghilangkan karakter non-angka

  if (amount >= 1000000000) {
    // Jika dana lebih dari atau sama dengan 1 miliar
    return `${(amount / 1000000000).toFixed(1)} M`;
  } else if (amount >= 1000000) {
    // Jika dana lebih dari atau sama dengan 1 juta
    return `${(amount / 1000000).toFixed(1)} Jt`;
  } else {
    // Jika dana kurang dari 1 juta
    return `Rp ${amount.toLocaleString()}`;
  }
};

const TableList = ({ item }) => {
  const navigate = useNavigate();

  return (
    <tr
      className="bg-white border-b border-gray-100 cursor-pointer hover:bg-gray-50"
      onClick={() => navigate(`/project/${item.id}`)}
    >
      <td className="px-6 py-4 font-medium whitespace-nowrap flex items-center"><FaRegBuilding className="w-5 h-5 mr-2 rounded-full" />{item.name}</td>
      <td className="px-6 py-4">{item.type}</td>
      <td className="px-6 py-4">{item.location}</td>
      <td className="px-6 py-4">{formatDana(item.dana)}</td>
      <td className="px-6 py-4">{item.profit}</td>
    </tr>
  );
};

TableList.propTypes = {
  item: propTypes.object.isRequired,
};

export default TableList;
