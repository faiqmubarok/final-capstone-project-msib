import propTypes from "prop-types";
import { Link } from "react-router-dom";

const TableList = ({ item }) => {
  return (
    <tr className="bg-white border-b border-gray-100">
      <td className="px-6 py-4 font-medium whitespace-nowrap">{item.name}</td>
      <td className="px-6 py-4">{item.type}</td>
      <td className="px-6 py-4">{item.location}</td>
      <td className="px-6 py-4">{item.profit}</td>
      <td className="px-6 py-4">
        <Link to={`/detail/${item.name}`} className="font-medium text-orangePrimary hover:underline">
          Detail
        </Link>
      </td>
    </tr>
  );
};

TableList.propTypes = {
  item: propTypes.object.isRequired,
};

export default TableList;
