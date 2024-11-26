import { useState, useEffect } from "react";
import axios from "axios";

const useFetchDataStats = ({ userId }) => {
  const [dataStats, setDataStats] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDataStats = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/portfolio/investmentStats/${userId}/`
        );
        const data = response.data;
        setDataStats(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (userId) {
      getDataStats();
    }
  }, [userId]);

  return { dataStats, isloading, error };
};

export default useFetchDataStats;
