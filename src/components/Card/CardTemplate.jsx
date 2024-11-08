import propTypes from "prop-types";

const CardTemplate = ({
  children,
  title,
  padding,
  titleClass,
  containerClass,
  contentClass,
}) => {
  return (
    <div
      className={`rounded-sm border border-gray-100 bg-white shadow-md ${containerClass || ''}`}
    >
      <div className={`border-b border-gray-200 py-4 px-${padding}`}>
        <h3 className={`font-medium text-black ${titleClass}`}>{title}</h3>
      </div>
      <div className={`${contentClass || ''}`}>{children}</div>
    </div>
  );
};

CardTemplate.propTypes = {
  children: propTypes.node,
  title: propTypes.string,
  padding: propTypes.string,
  titleClass: propTypes.string,
  containerClass: propTypes.string,
  contentClass: propTypes.string,
};
export default CardTemplate;
