import { TransactionProvider } from "./TransactionContext";
import propTypes from "prop-types";

const AppProvider = ({ children }) => {
  return <TransactionProvider>{children}</TransactionProvider>;
};

AppProvider.propTypes = {
  children: propTypes.node,
};

export default AppProvider;
