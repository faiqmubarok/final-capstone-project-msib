import { useEffect, useState } from "react";
import axios from "axios";
import propTypes from "prop-types";

const useFetchPortalCode = ({ cityId, districtId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `https://alamat.thecloudalert.com/api/kodepos/get/?d_kabkota_id=${cityId}&d_kecamatan_id=${districtId}`
        );

        setData(response?.data.result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (cityId && districtId) {
      fetchAddress();
    } 

  }, [cityId, districtId]);

  return { data, loading, error };
};

useFetchPortalCode.propTypes = {
  cityId: propTypes.string,
  districtId: propTypes.string,
};

export default useFetchPortalCode;
