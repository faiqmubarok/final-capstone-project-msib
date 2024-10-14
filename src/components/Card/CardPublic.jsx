import propTypes from "prop-types";

const CardPublic = ({ icon, title, article, backgroundColor }) => {
  return (
    <div className={`${backgroundColor || "bg-white"} shadow-lg rounded-xl p-8 transform hover:scale-105 transition-all duration-300 h-auto`}>
      {icon}
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p>
        {article}
      </p>
    </div>
  );
};

CardPublic.propTypes = {
  icon: propTypes.node,
  title: propTypes.string,
  article: propTypes.string,
  backgroundColor: propTypes.string,
};

export default CardPublic;
