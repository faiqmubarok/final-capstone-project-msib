import propTypes from "prop-types";
import TableList from "./TableList";

const TableContainer = ({ columns, items }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            {columns.map((col, index) => (
              <th scope="col" className="px-6 py-3" key={index}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <TableList key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TableContainer.propTypes = {
  items: propTypes.array.isRequired,
  columns: propTypes.array.isRequired,
};

export default TableContainer;
