
import { useEffect, useState } from "react";
import axios from "axios";

const useFetchBankList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formatOption = (banks) => {
    return banks.map((bank) => ({
      id: bank.code,
      text: bank.name,
    }));
  };

  useEffect(() => {
    const fetchBanks = async () => {
      setLoading(true);
      setError(null);

      try {
        // Format untuk Basic Auth
        const authString = `${import.meta.env.VITE_XENDIT_API_KEY}:${import.meta.env.VITE_XENDIT_PASSWORD}`;
        // Encode ke Base64
        const encodedCredentials = btoa(authString);

        const response = await axios.get(
        `${import.meta.env.VITE_XENDIT_BANKS_URL}`,
          {
            headers: {
              Authorization: `Basic ${encodedCredentials}`,
            },
          }
        );

        setData(formatOption(response.data));
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchBanks();
  }, []); 

  return { data, loading, error };
};

export default useFetchBankList;

