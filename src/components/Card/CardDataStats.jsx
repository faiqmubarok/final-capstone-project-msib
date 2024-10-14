import propTypes from "prop-types";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";

const CardDataStats = ({
  children,
  total,
  title,
  levelUp,
  levelDown,
  rate,
}) => {
  return (
    <div className="rounded-sm border border-gray-100 bg-white py-6 px-7 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100">
        {children}
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-xl font-bold text-black">{total}</h4>
          <span className="text-sm font-medium">{title}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp && "text-red-300"
          } ${levelDown && "text-red-500"} `}
        >
          {rate}
          {levelUp && <FaArrowUpLong className="text-green-500 w-3 h-3" />}
          {levelDown && <FaArrowDownLong className="text-red-500 w-3 h-3" />}
        </span>
      </div>
    </div>
  );
};

CardDataStats.propTypes = {
  children: propTypes.node,
  total: propTypes.string,
  title: propTypes.string,
  levelUp: propTypes.bool,
  levelDown: propTypes.bool,
  rate: propTypes.string,
};

export default CardDataStats;
