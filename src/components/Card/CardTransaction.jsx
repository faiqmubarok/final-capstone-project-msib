import propTypes from "prop-types";
import { FaRegBuilding } from "react-icons/fa";
const CardTransaction = ({
  transaction,
  selectedTransaction,
  onSelectedTransaction,
}) => {
  return (
    <div
      key={transaction.id}
      onClick={() => onSelectedTransaction(transaction)}
      className={`p-4 border border-gray-100 rounded shadow-sm cursor-pointer hover:bg-gray-50 transition flex items-center text-sm ${
        selectedTransaction === transaction ? "border-orangePrimary" : ""
      }`}
    >
      <FaRegBuilding className="w-6 h-6 mr-5 rounded-full" />
      <div className="flex justify-between gap-5 items-center w-full text-black">
        <div className="flex flex-col gap-1.5 flex-1">
          <p className="font-semibold text-base">{transaction.projectName}</p>
          <p
            className={`${
              transaction.status === "Sukses"
                ? "text-green-600"
                : "text-yellow-500"
            }`}
          >
            {transaction.status}
          </p>
          <p>{transaction.transactionDate}</p>
        </div>
        <p className={` ${transaction.transactionType === "Pemasukan" ? "text-green-600" : "text-red-500"} font-semibold`}>
          Rp {transaction.investmentAmount.toLocaleString()}
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
