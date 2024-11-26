import PropTypes from "prop-types";
import { Suspense } from "react";

const TableContainer = ({ columns, children, loading }) => {
  return (
    <div className="relative overflow-x-auto no-scrollbar">
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
          {loading ? (
            <tr className="bg-white border-b border-gray-100">
              <td
                colSpan={columns.length}
                className="text-center px-6 py-4 font-medium"
              >
                Memuat...
              </td>
            </tr>
          ) : children && children.length === 0 || children === undefined ? (
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
              {children}
            </Suspense>
          )}
        </tbody>
      </table>
    </div>
  );
};

TableContainer.propTypes = {
  columns: PropTypes.array,
  children: PropTypes.node,
  loading: PropTypes.bool,
};

export default TableContainer;
