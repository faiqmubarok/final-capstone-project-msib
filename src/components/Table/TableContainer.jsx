import PropTypes from "prop-types";
import { lazy, Suspense } from "react";

const TableList = lazy(() => import("./TableList"));

const TableContainer = ({ columns, items, filteredProjects }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            {columns.map((col, index) => (
              <th scope="col" className="px-6 py-3 text-nowrap" key={index}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredProjects.length === 0 ? (
            <tr className="bg-white border-b border-gray-100">
            <td
              colSpan={columns.length}
              className="text-center px-6 py-4 font-medium"
            >
              Tidak ada data yang ditemukan
            </td>
          </tr>
          ) : (
            <Suspense
              fallback={
                <tr className="bg-white border-b border-gray-100">
                  <td
                    colSpan={columns.length}
                    className="text-center px-6 py-4 font-medium"
                  >
                    Memuat...
                  </td>
                </tr>
              }
            >
              {items.map((item, index) => (
                <TableList key={index} item={item} />
              ))}
            </Suspense>
          )}
        </tbody>
      </table>
    </div>
  );
};

TableContainer.propTypes = {
  items: PropTypes.array,
  columns: PropTypes.array,
  filteredProjects: PropTypes.array,
};

export default TableContainer;
