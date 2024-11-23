import propTypes from "prop-types";
import { FaRegBuilding } from "react-icons/fa";
import { useTransaction } from "../../context/TransactionContext";
const CardTransaction = ({ transaction, selectedTransaction }) => {
  const { handleSelectTransaction } = useTransaction();
  return (
    <div
      key={transaction.id}
      onClick={() => handleSelectTransaction(transaction)}
      className={`p-4 border border-gray-100 rounded shadow-sm cursor-pointer hover:bg-gray-50 transition flex items-center text-sm ${
        selectedTransaction === transaction ? "border-orangePrimary" : ""
      }`}
    >
      {transaction?.project.logo ? (
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}${
            transaction?.project.logo
          }`}
          alt="logo"
          className="w-6 h-6 mr-2 rounded-full object-cover text-[10px] border shadow-md overflow-hidden shrink-0"
        />
      ) : (
        <FaRegBuilding className="w-6 h-6 mr-5 rounded-full" />
      )}
      <div className="flex justify-between gap-5 items-center w-full text-black">
        <div className="flex flex-col gap-1.5 flex-1">
          <p className="font-semibold text-base">{transaction.project.name}</p>
          <p
            className={`${
              transaction.status_display === "Berhasil"
                ? "text-green-600"
                : "text-yellow-500"
            }`}
          >
            {transaction.status_display}
          </p>
          <p>
            {new Date(transaction.transaction_date).toLocaleDateString(
              "id-ID",
              {
                day: "2-digit",
                month: "long",
                year: "numeric",
              }
            )}
          </p>
        </div>
        <p
          className={` ${
            transaction.transaction_type_display === "Setor Dana"
              ? "text-green-600"
              : "text-red-500"
          } font-semibold`}
        >
          {Number(transaction.amount).toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          })}
        </p>
      </div>
    </div>
  );
};

CardTransaction.propTypes = {
  transaction: propTypes.object,
  selectedTransaction: propTypes.object,
  onSelectedTransaction: propTypes.func,
};

export default CardTransaction;
