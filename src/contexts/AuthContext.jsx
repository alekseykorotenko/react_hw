import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [userName, setUserName] = useState('');

  const contextValue = {
    userName,
    setUserName
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
