import propTypes from "prop-types";

const Input = ({ value, setValue, type, content, placeholder }) => {
  return (
    <div>
      <label
        htmlFor={type}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {content}
      </label>
      <input
        type={type}
        name={type}
        id={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
        placeholder={placeholder}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

Input.propTypes = {
  value: propTypes.string,
  setValue: propTypes.func,
  type: propTypes.string,
  placeholder: propTypes.string,
  content: propTypes.string,
};


export default Input;
