import React, { createContext, useState } from 'react';

export const OrderContext = createContext(null);

const OrderContextProvider = ({ children }) => {
  const [data, setData] = useState({});

  const contextValue = {
    data,
    setData
  };

  return <OrderContext.Provider value={contextValue}>{children}</OrderContext.Provider>;
};

export default OrderContextProvider;
