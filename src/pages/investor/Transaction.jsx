import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import dataTransaction from "../../data/dummy-transaction.json";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTransactions(dataTransaction.transaction);
  }, []);

  const handleViewDetail = (id) => {
    navigate(`/transactions/${id}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Riwayat Transaksi</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">Nama Proyek</th>
            <th className="px-4 py-2 border-b text-left">Jumlah Investasi</th>
            <th className="px-4 py-2 border-b text-left">Tanggal Transaksi</th>
            <th className="px-4 py-2 border-b text-left">Status</th>
            <th className="px-4 py-2 border-b text-left">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="px-4 py-2 border-b">{transaction.projectName}</td>
              <td className="px-4 py-2 border-b">Rp {transaction.investmentAmount.toLocaleString()}</td>
              <td className="px-4 py-2 border-b">{transaction.transactionDate}</td>
              <td className={`px-4 py-2 border-b ${transaction.status === 'Sukses' ? 'text-green-600' : 'text-yellow-500'}`}>
                {transaction.status}
              </td>
              <td className="px-4 py-2 border-b">
                <button
                  onClick={() => handleViewDetail(transaction.id)}
                  className="text-blue-600 hover:underline"
                >
                  Lihat Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
