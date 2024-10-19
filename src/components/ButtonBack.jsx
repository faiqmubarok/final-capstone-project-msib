import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ButtonBack = () => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };
  return (
    <button className="p-2 absolute left-4 top-4 " onClick={handleBackButton}>
      <IoIosArrowRoundBack className="w-9 h-9" />
    </button>
  );
};

export default ButtonBack;
