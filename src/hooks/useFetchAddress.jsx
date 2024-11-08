import { useEffect, useState } from "react";
import axios from "axios";
import propTypes from "prop-types";

const useFetchAddress = ({ endPoint, from, id }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL_ADDRESS}/${endPoint}/get/${
            from && id ? `?d_${from}_id=${id}` : ""
          }`
        );

        setData(response?.data.result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if(endPoint === "provinsi") {
        fetchAddress();
    }else{
        if(from && id) {
            fetchAddress();
        }
    }

  }, [endPoint, from, id]);

  return { data, loading, error };
};

useFetchAddress.propTypes = {
  endPoint: propTypes.string,
  from: propTypes.string,
  id: propTypes.string,
};

export default useFetchAddress;
