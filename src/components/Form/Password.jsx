import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import propTypes from "prop-types";
const Password = ({ id, password, setPassword, content }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <div>
      <label
        htmlFor={id ? id : "password"}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {content}
      </label>
      <div className="relative">
        <input
          type={hidePassword ? "password" : "text"}
          name={id ? id : "password"}
          id={id ? id : "password"}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
          onClick={() => setHidePassword(!hidePassword)}
        >
          {hidePassword ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
    </div>
  );
};

Password.propTypes = {
  password: propTypes.string.isRequired,
  setPassword: propTypes.func.isRequired,
  content: propTypes.string,
  id: propTypes.string,
};

export default Password;
