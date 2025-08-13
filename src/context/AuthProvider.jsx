// src/context/AuthProvider.jsx
import React, { createContext, useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
  const [IsAuth, setIsAuth] = useState(false); // Or true based on logic

  return (
    <AuthContext.Provider value={{ IsAuth, setAuth: setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
