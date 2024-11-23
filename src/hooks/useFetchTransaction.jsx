import { useState, useEffect } from "react";
import axios from "axios";

const useFetchTransaction = ({ userId }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTransactions = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/transactions/getTransaction/${userId}/`
        );
        const data = response.data;
        console.log(data);
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (userId) {
      getTransactions();
    }
  }, [userId]);

  return { transactions, loading, error };
};

export default useFetchTransaction;
