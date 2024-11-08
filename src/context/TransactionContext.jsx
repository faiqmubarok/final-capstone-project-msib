/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const navigate = useNavigate();

  const handleSelectTransaction = (transaction) => {
    setSelectedTransaction(transaction);
    navigate("/transaction");
  };

  return (
    <TransactionContext.Provider
      value={{ selectedTransaction, handleSelectTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

TransactionProvider.propTypes = {
  children: propTypes.node,
};

export const useTransaction = () => useContext(TransactionContext);
