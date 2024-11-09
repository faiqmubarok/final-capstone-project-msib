import { createContext, useContext, useState } from "react";
import Alert from "../components/Alert/Alert";
import propTypes from "prop-types";

const AlertContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    type: "",
    message: "",
    isVisible: false,
  });

  const showAlert = (type, message) => {
    setAlert({ type, message, isVisible: true });

    if (type === "error") {
      setTimeout(() => {
        setAlert((prevAlert) => ({ ...prevAlert, isVisible: false }));
      }, 5000);
    } else {
      setTimeout(() => {
        setAlert((prevAlert) => ({ ...prevAlert, isVisible: false }));
      }, 2000);
    }
  };

  const closeAlert = () =>
    setAlert((prevAlert) => ({ ...prevAlert, isVisible: false }));

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert.isVisible && (
        <Alert type={alert.type} onClose={closeAlert}>
          {alert.message}
        </Alert>
      )}
    </AlertContext.Provider>
  );
};

AlertProvider.propTypes = {
  children: propTypes.node,
};
