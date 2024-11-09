import { TransactionProvider } from "./TransactionContext";
import propTypes from "prop-types";
import { AlertProvider } from "./AlertContext";

const AppProvider = ({ children }) => {
  return (
    <TransactionProvider>
      <AlertProvider>{children}</AlertProvider>
    </TransactionProvider>
  );
};

AppProvider.propTypes = {
  children: propTypes.node,
};

export default AppProvider;
