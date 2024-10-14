import propTypes from "prop-types";
const CardTestimony = ({ image, comment, writer, partisipant }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <img
          src={image}
          alt={writer}
          className="w-24 h-24 rounded-full border-4 border-gray-100"
          loading="lazy"
        />
      </div>
      <div className="pt-16">
        <p className="italic text-gray-700">
          &ldquo;{comment}&rdquo;
        </p>
        <p className="font-semibold mt-4">- {writer},{partisipant} </p>
      </div>
    </div>
  );
};

CardTestimony.propTypes = {
  image: propTypes.string,
  comment: propTypes.string,
  writer: propTypes.string,
  partisipant: propTypes.string,
};

export default CardTestimony;
