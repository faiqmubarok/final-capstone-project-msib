
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
        const apiKey = "xnd_development_P4qDfOss0OCpl8RtKrROHjaQYNCk9dN5lSfk+R1l9Wbe+rSiCwZ3jw==";
        const password = "";

        // Format untuk Basic Auth
        const authString = `${apiKey}:${password}`;
        // Encode ke Base64
        const encodedCredentials = btoa(authString);

        const response = await axios.get(
          "https://api.xendit.co/available_disbursements_banks",
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

