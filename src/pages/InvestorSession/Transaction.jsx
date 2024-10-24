import { useEffect, useState } from "react";
import dataTransaction from "../../data/dummy-transaction.json";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Pagination from "../../components/Pagination/Pagination";
import CardTransaction from "../../components/Card/CardTransaction";
import { FaRegClipboard, FaCheck, FaRegBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [page, setPage] = useState(1);
  const [isCopied, setIsCopied] = useState(false);
  const itemsPerPage = 5;

  // Copy transaction ID to clipboard
  const handleCopy = () => {
    if (selectedTransaction) {
      navigator.clipboard.writeText(selectedTransaction.id).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      });
    }
  };

  // Load transactions from JSON on mount
  useEffect(() => {
    setTransactions(dataTransaction.transaction);
  }, []);

  // Handle selecting a transaction
  const handleSelectTransaction = (transaction) => {
    setSelectedTransaction(transaction);
    setIsCopied(false); // Reset copy state when selecting a new transaction
  };

  // Calculate pagination
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTransactions = transactions.slice(startIndex, endIndex);
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  return (
    <>
      <Breadcrumbs pageName="Transaksi" mainRoute={"/dashboard"} />

      <section className="w-full flex flex-col items-center mb-6 rounded-lg shadow-md bg-white p-6">
        <h2 className="text-xl font-semibold mb-4 text-start w-full text-gray-800">
          Detail Transaksi
        </h2>

        {selectedTransaction ? (
          <div className="w-full p-4 rounded-lg shadow-sm bg-gray-50">
            {/* Nama Proyek */}
            <div className="flex items-center justify-between gap-2">
              <Link to={"/project/1"} className="flex gap-3 items-center">
                <FaRegBuilding className="w-6 h-6" />
                <span className="font-medium text-black">
                  <p>{selectedTransaction.projectName}</p>
                  <p className="text-sm text-gray-500">Pertanian</p>
                </span>
              </Link>
              <span
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  selectedTransaction.status === "Sukses"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {selectedTransaction.status}
              </span>
            </div>

            <hr className="my-5" />

            {/* ID Transaksi */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-500">ID Transaksi</p>
              <div className="flex items-center">
                <span className="text-sm font-semibold text-black mr-2">
                  #{selectedTransaction.id}
                </span>
                <button
                  onClick={handleCopy}
                  className="p-1 rounded hover:bg-gray-200 transition"
                  title="Salin ID"
                >
                  {isCopied ? (
                    <FaCheck className="h-4 w-4 text-green-500 transition-all" />
                  ) : (
                    <FaRegClipboard className="h-4 w-4 text-gray-600 transition-all" />
                  )}
                </button>
              </div>
            </div>

            {/* Informasi Transaksi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Jumlah Investasi</span>
                <span className="text-lg font-semibold text-black">
                  Rp {selectedTransaction.investmentAmount.toLocaleString()}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Metode Pembayaran</span>
                <span className="text-lg font-semibold text-black">
                  {selectedTransaction.paymentMethod}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Tanggal Transaksi</span>
                <span className="text-lg font-semibold text-black">
                  {selectedTransaction.transactionDate}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Waktu Transaksi</span>
                <span className="text-lg font-semibold text-black">
                  {selectedTransaction.transactionTime}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Tipe Transaksi</span>
                <span
                  className={`text-lg font-semibold ${
                    selectedTransaction.transactionType === "Pemasukan"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {selectedTransaction.transactionType}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Tidak ada transaksi yang dipilih.</p>
        )}
      </section>

      <section className="w-full flex flex-col mb-6 rounded-lg shadow-md bg-white p-6">
        <h2 className="text-xl font-semibold mb-4 text-black">
          Daftar Transaksi
        </h2>
        <div className="flex flex-col gap-4 mb-6">
          {currentTransactions.map((transaction) => (
            <CardTransaction
              key={transaction.id}
              transaction={transaction}
              onSelectedTransaction={handleSelectTransaction}
              selectedTransaction={selectedTransaction}
            />
          ))}
        </div>
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </section>
    </>
  );
};

export default Transaction;
