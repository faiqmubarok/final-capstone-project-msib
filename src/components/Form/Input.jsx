import PropTypes from "prop-types";

const Input = ({
  value,
  setValue,
  type,
  id,
  label,
  placeholder,
  autoComplete,
  name,
  isRequired = true,
}) => {
  const handleChange = (e) => {
    setValue(e);
  };

  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-500"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="bg-gray-50 border border-gray-300 text-black rounded-lg focus:ring-greenPrimary focus:border-greenPrimary block w-full p-2.5"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required={isRequired}
        autoComplete={autoComplete || "off"}
      />
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
};

export default Input;
