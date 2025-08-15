
import React, { createContext, useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
  const [IsAuth, setIsAuth] = useState(false); 

  return (
    <AuthContext.Provider value={{ IsAuth, setAuth: setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
