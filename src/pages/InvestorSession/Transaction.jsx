import { useEffect, useState } from "react";
import dataTransaction from "../../data/dummy-transaction.json";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  useEffect(() => {
    setTransactions(dataTransaction.transaction);
  }, []);

  const handleSelectTransaction = (transaction) => {
    setSelectedTransaction(transaction);
  };

  return (
    <>
      <Breadcrumbs pageName="Transaksi" mainRoute={"/dashboard"} />

      <section className="w-full h-auto flex flex-col items-center justify-center mb-6 rounded-lg shadow-md bg-white p-6">
        <h3 className="text-xl font-semibold mb-4 text-start w-full">Detail Transaksi</h3>
        {selectedTransaction ? (
          <div className="p-4 border rounded shadow-sm bg-gray-50">
            <p>
              <strong>Nama Proyek:</strong> {selectedTransaction.projectName}
            </p>
            <p>
              <strong>Jumlah Investasi:</strong> Rp{" "}
              {selectedTransaction.investmentAmount.toLocaleString()}
            </p>
            <p>
              <strong>Tanggal Transaksi:</strong>{" "}
              {selectedTransaction.transactionDate}
            </p>
            <p>
              <strong>Status:</strong> {selectedTransaction.status}
            </p>
          </div>
        ) : (
          <p className="text-gray-500">Tidak ada transaksi yang dipilih.</p>
        )}
      </section>

      <section className="w-full h-auto flex flex-col mb-6 rounded-lg shadow-md bg-white p-6">
        <h3 className="text-xl font-semibold mb-4">Daftar Transaksi</h3>
        <div className="flex flex-col gap-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              onClick={() => handleSelectTransaction(transaction)}
              className="p-4 border rounded shadow-sm cursor-pointer hover:bg-gray-100 transition"
            >
              <p className="font-semibold">{transaction.projectName}</p>
              <p>Rp {transaction.investmentAmount.toLocaleString()}</p>
              <p>{transaction.transactionDate}</p>
              <p
                className={`font-semibold ${
                  transaction.status === "Sukses"
                    ? "text-green-600"
                    : "text-yellow-500"
                }`}
              >
                {transaction.status}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Transaction;
