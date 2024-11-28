import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Pagination from "../../components/Pagination/Pagination";
import CardTransaction from "../../components/Card/CardTransaction";
import { FaRegClipboard, FaCheck, FaRegBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";
import CardTemplate from "../../components/Card/CardTemplate";
import { useTransaction } from "../../context/TransactionContext";
import useFetchTransaction from "../../hooks/useFetchTransaction";

const Transaction = () => {
  const { selectedTransaction, handleSelectTransaction } = useTransaction();
  const [page, setPage] = useState(1);
  const [isCopied, setIsCopied] = useState(false);
  const userId = JSON.parse(sessionStorage.getItem("authToken")).user.id;
  const { transactions, loading } = useFetchTransaction({ userId });

  const handleCopy = () => {
    if (selectedTransaction) {
      navigator.clipboard.writeText(selectedTransaction.id).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      });
    }
  };

  const currentTransactions = transactions.slice((page - 1) * 5, page * 5);

  return (
    <>
      <Breadcrumbs pageName="Transaksi" mainRoute={"/dashboard"} />
      <CardTemplate
        title={"Detail Transaksi"}
        padding={"6"}
        titleClass={"text-xl font-semibold"}
        containerClass={"mb-8"}
        contentClass={"p-6"}
      >
        {selectedTransaction ? (
          <div className="w-full p-4 shadow-sm bg-gray-50">
            {/* Nama Proyek */}
            <div className="flex items-center justify-between gap-2">
              <Link
                to={`/project/${selectedTransaction.project.id}`}
                className="flex gap-3 items-center"
              >
                {selectedTransaction?.project.logo ? (
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}${
                      selectedTransaction?.project.logo
                    }`}
                    alt="logo"
                    className="w-6 h-6 mr-2 rounded-full object-cover text-[10px] border shadow-md overflow-hidden shrink-0"
                  />
                ) : (
                  <FaRegBuilding className="w-6 h-6 mr-5 rounded-full" />
                )}
                <span className="font-medium text-black">
                  <p>{selectedTransaction.project.name}</p>
                  <p className="text-sm text-gray-500">
                    {selectedTransaction.project.type_display}
                  </p>
                </span>
              </Link>
              <span
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  selectedTransaction.status_display === "Berhasil"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {selectedTransaction.status_display}
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
                <span className="text-sm text-gray-500">Jumlah Transaksi</span>
                <span className="text-lg font-semibold text-black">
                  {Number(selectedTransaction.amount).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  })}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Metode Pembayaran</span>
                <span className="text-lg font-semibold text-black">
                  {selectedTransaction.payment_method}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Tanggal Transaksi</span>
                <span className="text-lg font-semibold text-black">
                  {new Date(
                    selectedTransaction.transaction_date
                  ).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Waktu Transaksi</span>
                <span className="text-lg font-semibold text-black">
                  {selectedTransaction.transaction_date.slice(11, 19)}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Tipe Transaksi</span>
                <span
                  className={`text-lg font-semibold ${
                    selectedTransaction.transaction_type_display === "Berhasil"
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {selectedTransaction.transaction_type_display}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center">
            Tidak ada transaksi yang dipilih.
          </p>
        )}
      </CardTemplate>
      <CardTemplate
        title={"Riwayat Transaksi"}
        padding={"6"}
        titleClass={"text-xl font-semibold"}
        containerClass={"mb-8"}
        contentClass={"p-6"}
      >
        {loading && (
          <div className="w-full text-center text-gray-500">Memuat...</div>
        )}
        {!loading && transactions.length === 0 ? (
          <div className="w-full text-center text-gray-500">
            Tidak ada data Transaksi.
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              {currentTransactions.map((transaction) => (
                <CardTransaction
                  key={transaction.id}
                  transaction={transaction}
                  onSelectedTransaction={handleSelectTransaction}
                  selectedTransaction={selectedTransaction}
                />
              ))}
            </div>
            <div className="mt-3">
              <Pagination
                page={page}
                totalPages={Math.ceil(transactions.length / 5)}
                setPage={setPage}
              />
            </div>
          </>
        )}
      </CardTemplate>
    </>
  );
};

export default Transaction;
